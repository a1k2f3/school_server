import { Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { join } from 'path';
import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { student } from './student.entity';
import { Course } from 'src/course/course.entity';
import { CreateCourseDto } from './course.dto';

@Injectable()
export class StudentService {

}
