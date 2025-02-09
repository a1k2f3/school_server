import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Department } from '../department/department.entity';
import { Course } from '../course/course.entity';

@Entity()
export class student {  // ✅ Ensure class name is capitalized as "Student"
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
   @Column({unique:true})
   Email:string
   @Column({unique:true})
   contact:number
   @Column()
   date:Date
   @Column()
   password:string
   @Column()
   image:string
  @ManyToOne(() => Department, (department) => department.student)
  department: Department;

  @ManyToOne(() => Course, (course) => course.student)
  @JoinTable()
  courses: Course[];
}
