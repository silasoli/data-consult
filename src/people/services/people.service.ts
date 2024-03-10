import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { People } from 'src/database/entities/people.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(People)
    private readonly repository: Repository<People>,
  ) {}
 
  public async findAll(): Promise<any> {
    return this.repository.find();
  }

  public async findOneByID(id: number): Promise<any> {
    return this.repository.findOneBy({ id })
  }

  public async findOneByCPF(cpf: string): Promise<any> {
    return this.repository.findOneBy({ cpf })
  }
}
