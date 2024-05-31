import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { People } from '../../database/entities/people.entity';
import { Repository } from 'typeorm';
import { PeopleResponseDto } from '../dto/people-response.dto';
import { PageDto } from '../../utils/dto/PageDto.dto';
import { PageMetaDto } from '../../utils/dto/PageMetaDto.dto';
import { PeopleQueryDto } from '../dto/people-query.dto';

@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(People)
    private readonly repository: Repository<People>,
  ) {}

  public async findAll(
    dto: PeopleQueryDto,
  ): Promise<PageDto<PeopleResponseDto>> {
    const queryBuilder = this.repository.createQueryBuilder('people');

    if (dto.name) {
      // dto.name = FormatUtil.capitalizeWords(dto.name);

      queryBuilder.andWhere('people.name LIKE :name', {
        name: `${dto.name.toLocaleLowerCase()}%`,
      });
    }

    if (dto.cpf) {
      queryBuilder.andWhere('people.cpf = :cpf', { cpf: dto.cpf });
    }

    if (dto.mother_name) {
      // dto.mother_name = FormatUtil.capitalizeWords(dto.mother_name);

      queryBuilder.andWhere('people.mother_name LIKE :mother_name', {
        mother_name: `${dto.mother_name.toLocaleLowerCase()}%`,
      });
    }

    queryBuilder
      .orderBy('people.id', dto.order)
      .offset((dto.page - 1) * dto.take)
      .limit(dto.take);

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
