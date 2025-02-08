import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, JoinColumn, CreateDateColumn, UpdateDateColumn, Unique } from "typeorm";
import { teacher } from "src/teacher/teacher.entity";
import { Course } from "src/course/course.entity";
import { student } from "src/student/student.entity";
import { HOD } from "src/hod/hod.entity";

@Entity()
export class Department {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ unique: true })
    
    name: string;

    @Column({ type: "text", nullable: true })
    description: string;
    @OneToOne(() => teacher,(teacher)=>teacher.department)
    @JoinColumn()
    teacher: teacher;  // Head of Department (One-to-One)
    @OneToOne(() => HOD, (hod) => hod.department, { cascade: true })
    @JoinColumn()
    hod: HOD;
    @OneToMany(() => Course, (course) => course.department)
    @JoinColumn()
    courses: Course[];  // A department can have multiple courses (One-to-Many)
    @OneToOne(() => student, (student) => student.department)
    @JoinColumn()
    student: student[];
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
}
