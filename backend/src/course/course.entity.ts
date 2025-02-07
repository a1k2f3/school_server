import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne } from "typeorm";
import { teacher } from "src/teacher/teacher.entity";
import { student } from "src/student/student.entity";
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
    credits: number
    @Column()
    duration: string;  // Example: "3 months", "6 weeks"

    @ManyToOne(() => teacher, (teacher) => teacher.courses, { onDelete: "CASCADE" })
    teacher: teacher;
    @OneToOne(() => Department, (department) =>department.courses )
    department: Department; 
    @ManyToOne(() => student, (student) => student.courses)
    student: student[];
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
