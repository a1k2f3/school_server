import { Injectable, UnauthorizedException } from '@nestjs/common';
import { student } from './student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { join } from 'path';
import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { Course } from 'src/course/course.entity';
import { CreateCourseDto } from './course.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(student)
    private userRepository: Repository<student>,
    @InjectRepository(Course)
    private courseRepository: Repository<Course>, 
    private readonly jwtService: JwtService,
  ) {}

  findAll() {
    return this.userRepository.find();
  }

  async findone(Email: string, password: string) {
    const user = await this.userRepository.findOneBy({ Email, password });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const { password: _, ...userWithoutPassword } = user;

    // Generate JWT token
    const payload = { email: user.Email, id: user.id };
    const token = this.jwtService.sign(payload);

    return { ...userWithoutPassword, token };
  }

  async addCourse(createCourseDto: CreateCourseDto) {
    const { courseName, duration, studentId } = createCourseDto;

    const student = await this.userRepository.findOne({ where: { id: studentId } });
    if (!student) throw new Error('Student not found');

    const course = this.courseRepository.create({ courseName, duration, student: student  });
    return this.courseRepository.save(course);
  }

  async createuser(
    name: string,
    email: string,
    phone: number,
    dob: Date,
    password: string,
    file: Express.Multer.File,
  ) {
    if (!file) {
      throw new Error('No file uploaded');
    }

    if (!file.buffer || file.buffer.length === 0) {
      throw new Error('File buffer is empty or undefined');
    }

    const projectRoot = process.cwd();
    const uploadsDir = join(projectRoot, 'uploads');

    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const uniqueFilename = `${uuidv4()}_${file.originalname}`;
    const targetPath = join(uploadsDir, uniqueFilename);

    try {
      fs.writeFileSync(targetPath, file.buffer);
    } catch (error) {
      throw new Error('Error saving file');
    }

    const imagePath = `/uploads/${uniqueFilename}`;

    const newUser = this.userRepository.create({
      name,
      Email: email,
      contact: phone,
      date: dob,
      password,
      image: imagePath,
    });

    return await this.userRepository.save(newUser);
  }

  async updatename(id: number, name: string, email: string, phone: number) {
    await this.userRepository.update({ id }, { name, Email: email, contact: phone });
  }

  async deleteuser(id: number) {
    try {
      const result = await this.userRepository.delete({ id });
      if (result.affected === 0) {
        throw new Error('No user found with the provided ID.');
      }
      return 'User deleted successfully';
    } catch (error) {
      throw new Error(`Could not delete user: ${error.message}`);
    }
  }
}
