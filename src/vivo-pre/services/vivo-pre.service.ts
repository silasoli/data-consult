import { Injectable } from '@nestjs/common';
import { VivoPre } from '../../database/entities/vivo-pre.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
// import { PageDto } from '../../utils/dto/PageDto.dto';
// import { PageMetaDto } from '../../utils/dto/PageMetaDto.dto';
import { VivoPreResponseDto } from '../dto/vivo-pre-response.dto';

@Injectable()
export class VivoPreService {
  constructor(
    @InjectRepository(VivoPre)
    private readonly repository: Repository<VivoPre>,
  ) {}

  public async findByName(name: string): Promise<VivoPreResponseDto[]> {
    // const serasaEmails = await this.repository.findOne({
    //   where: {
    //     name: Like(`${name.toLocaleUpperCase()}%`),
    //   },
    // });

    // return [serasaEmails].map((item) => new SerasaEmailsResponseDto(item));

    const queryBuilder = this.repository.createQueryBuilder('vivo_pre');

    queryBuilder.andWhere('vivo_pre.name LIKE :name', {
      name: `${name.toLocaleUpperCase()}%`,
    });

    queryBuilder.offset((1 - 1) * 20).limit(20);

    const serasaEmails = await queryBuilder.getMany();

    return serasaEmails.map((item) => new VivoPreResponseDto(item));
  }

  public async findOneByID(id: number): Promise<VivoPreResponseDto> {
    const vivopre = await this.repository.findOneBy({ id });

    return new VivoPreResponseDto(vivopre);
  }

  public async findOneByPhone(phone: string): Promise<VivoPreResponseDto> {
    const vivopre = await this.repository.findOneBy({ phone });

    return new VivoPreResponseDto(vivopre);
  }

  public async findOneByDocument(
    document: string,
  ): Promise<VivoPreResponseDto> {
    const vivopre = await this.repository.findOneBy({ document });

    return new VivoPreResponseDto(vivopre);
  }

  public async findOneByEmail(email: string): Promise<VivoPreResponseDto> {
    const vivopre = await this.repository.findOneBy({
      email: email.toLocaleLowerCase(),
    });

    return new VivoPreResponseDto(vivopre);
  }
}
