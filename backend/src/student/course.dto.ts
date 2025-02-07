import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateCourseDto {
  @IsNotEmpty()
  @IsString()
  courseName: string;
  @IsNotEmpty()
  @IsString()
  duration: string;
  @IsNotEmpty()
  @IsNumber()
  studentId: number;
}
