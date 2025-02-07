import { Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { join } from 'path';
import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { student } from './student.entity';
import { Course } from 'src/course/course.entity';
import { CreateCourseDto } from './course.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(student)
    private studentRepository: Repository<student>,
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,

    private readonly jwtService: JwtService,
  ) {}

  // Get all students
  findAll() {
    return this.studentRepository.find();
  }

  // Find one student and return JWT
  async findone(email: string, password: string) {
    const user = await this.studentRepository.findOneBy({ Email: email, password });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const token = this.jwtService.sign({ email: user.Email, id: user.id });
    return { id: user.id, name: user.name, email: user.Email, token };
  }

  // Add a new course for a student
  async addCourse(createCourseDto: CreateCourseDto) {
    const { courseName, duration, studentId, description } = createCourseDto;

    const student = await this.studentRepository.findOne({ where: { id: studentId } });
    if (!student) {
      throw new NotFoundException('Student not found');
    }

    const course = this.courseRepository.create({
      courseName:[courseName],
      duration,
      description,
      student:[student], // Correctly assigning student to the course
    }as DeepPartial<Course>);

    return this.courseRepository.save(course);
  }

  // Create a new student with file upload
  async createuser(name: string, email: string, phone: number, dob: Date, password: string, file: Express.Multer.File) {
    if (!file || !file.buffer) {
      throw new Error('No file uploaded or file is empty');
    }

    const uploadsDir = join(process.cwd(), 'uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const filename = `${uuidv4()}_${file.originalname}`;
    const filePath = join(uploadsDir, filename);
    fs.writeFileSync(filePath, file.buffer);

    const newUser = this.studentRepository.create({
      name,
      Email: email,
      contact: phone,
      date: dob,
      password,
      image: `/uploads/${filename}`,
    });

    return this.studentRepository.save(newUser);
  }

  // Update student details
  async updatename(id: number, name: string, email: string, phone: number) {
    const user = await this.studentRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    user.name = name;
    user.Email = email;
    user.contact = phone;
    
    return this.studentRepository.save(user);
  }

  // Delete a student
  async deleteuser(id: number) {
    const result = await this.studentRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('No user found with the provided ID.');
    }
    return { message: 'User deleted successfully' };
  }
}
