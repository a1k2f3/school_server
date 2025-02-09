import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';


@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({unique:true})
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
