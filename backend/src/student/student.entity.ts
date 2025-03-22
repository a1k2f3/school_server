import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Department } from '../department/department.entity';
import { Course } from '../course/course.entity';
import { Assignment } from 'src/asgiment/asgiment.entity';
import { Attendance } from 'src/attendence/Attendence.entity';

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
  @OneToMany(() => Attendance, (attendence) =>attendence.Student  ,{  onDelete: 'CASCADE' })
  Attendence: student;
  @ManyToOne(() => Department, (department) => department.student)
  department: Department;

  @ManyToOne(() => Course, (course) => course.student)
  courses:Course[] ;
  // @JoinTable()  // Used correctly for ManyToMany
  @OneToMany(() => Assignment, (asgiment) => asgiment.students,{ nullable: false, onDelete: 'CASCADE' })
  asgiments: Assignment[];
}
