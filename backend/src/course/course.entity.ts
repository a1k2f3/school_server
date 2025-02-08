import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { teacher } from "src/teacher/teacher.entity";
import { Student } from "src/student/student.entity";
import { Department } from "src/department/department.entity";
@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    @Column({ type: "text", nullable: true })
    description: string;
    @Column()
    duration: string;  // Example: "3 months", "6 weeks"
    @ManyToOne(() => teacher, (teacher) => teacher.courses, { onDelete: "CASCADE" })
    teacher: teacher;
    @OneToOne(() => Department, (department) =>department.courses )
    @JoinColumn()
    department: Department; 
    @ManyToOne(() => Student, (student) => student.courses)
    student: Student[];
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
}

