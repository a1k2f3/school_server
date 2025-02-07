import { Course } from 'src/course/course.entity';
import { Department } from 'src/department/department.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, OneToMany, OneToOne } from 'typeorm';
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
  @OneToMany(() => Department, (department) => department.teacher)
  department: Department[];
  @Column()
  image: string; 
  @OneToOne(() => Course, (course) =>course.teacher )
    courses: Course[];
}
