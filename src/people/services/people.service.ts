import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { People } from 'src/database/entities/people.entity';
import { Repository } from 'typeorm';
import { PeopleResponseDto } from '../dto/people-response.dto';
import { PageDto } from 'src/utils/dto/PageDto.dto';
import { PageMetaDto } from 'src/utils/dto/PageMetaDto.dto';
import { PageOptionsDto } from 'src/utils/dto/PageOptionsDto.dto';

@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(People)
    private readonly repository: Repository<People>,
  ) {}

  public async findAll(
    dto: PageOptionsDto,
  ): Promise<PageDto<PeopleResponseDto>> {
    const queryBuilder = this.repository.createQueryBuilder('people');

    queryBuilder
      .orderBy('people.id', dto.order)
      .skip((dto.page - 1) * dto.take)
      .take(dto.take);

    const [data, itemCount] = await queryBuilder.getManyAndCount();

    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto: dto });

    return new PageDto(data, pageMetaDto);
  }

  public async findOneByID(id: number): Promise<PeopleResponseDto> {
    const people = await this.repository.findOneBy({ id });
    return new PeopleResponseDto(people);
  }

  public async findOneByCPF(cpf: string): Promise<PeopleResponseDto> {
    const people = await this.repository.findOneBy({ cpf });
    return new PeopleResponseDto(people);
  }
}
