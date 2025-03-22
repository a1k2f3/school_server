import { Injectable } from '@nestjs/common';
import { Assignment } from './asgiment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AsgimentService {
  constructor(
    @InjectRepository(Assignment)
    private readonly assignmentRepository: Repository<Assignment>, // Fixed name
  ) {}   
}

