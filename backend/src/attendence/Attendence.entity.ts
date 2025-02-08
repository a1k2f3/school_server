import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
// import { User } from 'src/user/user.entity';
import { Student } from 'src/student/student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Entity()
export class Attendance {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Student, (user) => user ,{ eager: true, onDelete: 'CASCADE' })
  Student: Student;
  @Column({ type: 'date' })
  date: Date;
  @Column({ type: 'time', nullable: true })
  checkInTime: string;
  @Column({ type: 'time', nullable: true })
  checkOutTime: string;
  @Column({ type: 'enum', enum: ['Present', 'Absent', 'Late', 'Leave'], default: 'Absent' })
  status: string;
  @Column({ type: 'text', nullable: true })
  remarks: string;
}
