import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from 'typeorm';
// import { Department } from './department.entity'
import { Department } from 'src/department/department.entity';

@Entity()
export class HOD {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ length: 50 })
  designation: string;

  @Column()
  qualification: string;

  @Column({ type: 'int' })
  experience: number;

  @Column({ type: 'date' })
  joiningDate: Date;

  // Many HODs belong to One Department
  @OneToOne(() => Department, (department) => department.hod, { onDelete: 'CASCADE' })
  department: Department;
}
