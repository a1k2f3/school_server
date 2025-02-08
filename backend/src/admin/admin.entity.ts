import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Unique(['Email'])
@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  contact: number;

  @Column()
  date: Date;

  @Column()
  password: string;

  @Column()
  image: string;

  @Column()
  role: string;  // New attribute for distinguishing school admin
}
