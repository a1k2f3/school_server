import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
@Unique(['Email'])
@Entity()
export class student {
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
  @Column()
  image: string; 
}
