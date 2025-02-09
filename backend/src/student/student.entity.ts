import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Department } from '../department/department.entity';
import { Course } from '../course/course.entity';

@Entity()
export class student {  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  contact: string;  // Changed from number to string


  @Column()
  password: string;

  @Column()
  image: string;

  @ManyToOne(() => Department, (department) => department.student)
  department: Department;

  @ManyToOne(() => Course, (course) => course.student)
  @JoinTable()  // Used correctly for ManyToMany
  courses: Course[];
}
