import { Injectable } from '@nestjs/common';
import { Telelista } from '../../database/entities/telelista.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TelelistaResponseDto } from '../dto/telelista-response.dto';

@Injectable()
export class TelelistaService {
  constructor(
    @InjectRepository(Telelista)
    private readonly repository: Repository<Telelista>,
  ) {}

  public async findOneByID(id: number): Promise<TelelistaResponseDto> {
    const data = await this.repository.findOneBy({ id });

    return new TelelistaResponseDto(data);
  }

  public async findByPhone(phone: string): Promise<TelelistaResponseDto[]> {
    const data = await this.repository.find({ where: { phone } });

    return data.map((item) => new TelelistaResponseDto(item));
  } 

  public async findByCPF(cpf: string): Promise<TelelistaResponseDto[]> {
    const data = await this.repository.find({ where: { cpf } });

    return data.map((item) => new TelelistaResponseDto(item));
  }

  public async findByName(name: string): Promise<TelelistaResponseDto[]> {
    const data = await this.repository.find({ where: { name } });

    return data.map((item) => new TelelistaResponseDto(item));
  }
}
