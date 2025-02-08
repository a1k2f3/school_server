import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Department } from '../department/department.entity';
import { Course } from '../course/course.entity';

@Entity()
export class student {  // ✅ Ensure class name is capitalized as "Student"
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Department, (department) => department.student)
  department: Department;

  @ManyToMany(() => Course)
  @JoinTable()
  courses: Course[];
}
