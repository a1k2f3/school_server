import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './course.entity';
import { teacher } from 'src/teacher/teacher.entity';
import { Department } from 'src/department/department.entity';
import { student } from 'src/student/student.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
    @InjectRepository(teacher)
    private readonly teacherRepository: Repository<teacher>,
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
    @InjectRepository(student)
    private readonly studentRepository: Repository<student>,
  ) {}

  // ✅ Create a new course
  async createCourse(courseData: any) {
    const teacher = await this.teacherRepository.findOne({ where: { id: courseData.teacherId } });
    if (!teacher) throw new NotFoundException('Teacher not found');

    const department = await this.departmentRepository.findOne({ where: { id: courseData.departmentId } });
    if (!department) throw new NotFoundException('Department not found');

    const course = this.courseRepository.create({ ...courseData, teacher, department });
    return this.courseRepository.save(course);
  }

  // ✅ Get all courses with relations
  async getAllCourses() {
    return this.courseRepository.find({ relations: ['teacher', 'department'] });
  }

  // ✅ Get a course by ID
  async getCourseById(id: number) {
    const course = await this.courseRepository.findOne({ where: { id }, relations: ['teacher', 'department', 'student'] });
    if (!course) throw new NotFoundException('Course not found');
    return course;
  }
  // ✅ Update a course
  async updateCourse(id: number, updateData: any) {
    const course = await this.getCourseById(id);
    
    if (updateData.teacherId) {
      const teacher = await this.teacherRepository.findOne({ where: { id: updateData.teacherId } });
      if (!teacher) throw new NotFoundException('Teacher not found');
      course.teacher = teacher;
    }

    if (updateData.departmentId) {
      const department = await this.departmentRepository.findOne({ where: { id: updateData.departmentId } });
      if (!department) throw new NotFoundException('Department not found');
      course.department = department;
    }

    Object.assign(course, updateData);
    return this.courseRepository.save(course);
  }

  // ✅ Delete a course
  async deleteCourse(id: number) {
    const course = await this.getCourseById(id);
    await this.courseRepository.remove(course);
  }
}
