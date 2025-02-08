import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { teacher } from 'src/teacher/teacher.entity';
import { Department } from 'src/department/department.entity';
import { student } from 'src/student/student.entity';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column()
  duration: string;  

  @ManyToOne(() => teacher, (teacher) => teacher.courses, { onDelete: 'CASCADE' })
  teacher: teacher;

  @ManyToOne(() => Department, (department) => department.courses)
  department: Department;

  @OneToMany(() => student, (student) => student.courses)
  student: student[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
