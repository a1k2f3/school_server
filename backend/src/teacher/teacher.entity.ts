import { Attendance } from 'src/attendence/Attendence.entity';
import { Course } from 'src/course/course.entity';
import { Department } from 'src/department/department.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, OneToMany, OneToOne, JoinColumn } from 'typeorm';
@Unique(['Email'])
@Entity()
export class  teacher {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  Email: string;
  @Column()
  contact: number;
  @Column()
  date: Date;  
  @Column()
  password: string;
  @JoinColumn()
  @OneToMany(() => Department, (department) => department.teacher)
  department: Department[];
  @OneToMany(() => Attendance, (attendence) =>attendence.teacher ,{  onDelete: 'CASCADE' })
  Attendence: Attendance;
  @Column()
  image: string; 
  @OneToOne(() => Course, (course) =>course.teacher )
    courses: Course[];
}
