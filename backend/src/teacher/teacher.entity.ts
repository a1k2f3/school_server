import { Department } from 'src/department/department.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, OneToMany } from 'typeorm';
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
  @OneToMany(() => Department, (department) => department)
  department: Department[];
  @Column()
  image: string; 
}
