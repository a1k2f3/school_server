import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
// import { User } from 'src/user/user.entity';
import { student } from 'src/student/student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { teacher } from 'src/teacher/teacher.entity';
import { time } from 'console';
@Entity()
export class Attendance {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => student, (user) => user.Attendence ,{ eager: true,nullable:true, onDelete: 'CASCADE' })
  Student: student;
  @ManyToOne(() => teacher, (user) =>user.Attendence ,{ eager: true,nullable:true, onDelete: 'CASCADE' })
  teacher: teacher;
  @Column({ type: 'date' })
  date: Date;
  @Column({ type: 'time', nullable: true ,default:time})
  checkInTime: string;
  @Column({ type: 'time', nullable: true,default:time })
  checkOutTime: string;
  @Column({ type: 'enum', enum: ['Present', 'Absent', 'Late', 'Leave'], default: 'Absent' })
  status: string;
  @Column({ type: 'text', nullable: true })
  remarks: string;
}