import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from 'typeorm';
import { student} from '../student/student.entity';

@Entity()
export class Assignment {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  dueDate: Date;
  @ManyToOne(() => student, (student) => student.asgiments)
  students: student;
}
