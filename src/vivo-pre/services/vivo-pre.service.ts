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

  // public async findAll(dto: any): Promise<PageDto<any>> {
  //   const queryBuilder = this.repository.createQueryBuilder('vivo_pre');

  // if (dto.name) {
  //   queryBuilder.andWhere('people.name ILIKE :name', {
  //     name: `%${dto.name}%`,
  //   });
  // }

  // if (dto.cpf) {
  //   queryBuilder.andWhere('people.cpf = :cpf', { cpf: dto.cpf });
  // }

  // if (dto.mother_name) {
  //   queryBuilder.andWhere('people.mother_name ILIKE :mother_name', {
  //     mother_name: `%${dto.mother_name}%`,
  //   });
  // }

  //   queryBuilder
  //     .orderBy('vivo_pre.id', dto.order)
  //     .skip((dto.page - 1) * dto.take)
  //     .take(dto.take);

  //   const [data, itemCount] = await queryBuilder.getManyAndCount();

  //   const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto: dto });

  //   return new PageDto(data, pageMetaDto);
  // }

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
    const vivopre = await this.repository.findOneBy({ email });

    return new VivoPreResponseDto(vivopre);
  }
}
