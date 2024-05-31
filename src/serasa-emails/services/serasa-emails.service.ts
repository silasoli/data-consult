import { Injectable } from '@nestjs/common';
import { SerasaEmails } from '../../database/entities/serasa-emails.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { SerasaEmailsResponseDto } from '../dto/serasa-emails-response.dto';

@Injectable()
export class SerasaEmailsService {
  constructor(
    @InjectRepository(SerasaEmails)
    private readonly repository: Repository<SerasaEmails>,
  ) {}

  public async findOneByID(id: number): Promise<SerasaEmailsResponseDto> {
    const serasaEmails = await this.repository.findOneBy({ id });

    return new SerasaEmailsResponseDto(serasaEmails);
  }

  public async findByCPF(cpf: string): Promise<SerasaEmailsResponseDto[]> {
    const serasaEmails = await this.repository.find({ where: { cpf } });

    return serasaEmails.map((item) => new SerasaEmailsResponseDto(item));
  }

  public async findByEmail(email: string): Promise<SerasaEmailsResponseDto[]> {
    const serasaEmails = await this.repository.find({
      where: { email: email.toLocaleLowerCase() },
    });

    return serasaEmails.map((item) => new SerasaEmailsResponseDto(item));
  }

  public async findByName(name: string): Promise<SerasaEmailsResponseDto[]> {
    const serasaEmails = await this.repository.findOne({
      where: {
        name: Like(`${name.toLocaleUpperCase()}%`),
      },
    });

    return [serasaEmails].map((item) => new SerasaEmailsResponseDto(item));
  }
}
