import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { student } from './student.entity';
import { CourseModule } from 'src/course/course.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
// import { jwtConstants } from './constants';
import { jwtConstants } from './constants';
@Module({
  imports: [
    TypeOrmModule.forFeature([student]), // Ensure this line is present
    CourseModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '30m' },
    }),
  ],
  providers: [StudentService],
  controllers: [StudentController],
  exports: [StudentService], // Export StudentService if needed elsewhere
})
export class StudentModule {}

