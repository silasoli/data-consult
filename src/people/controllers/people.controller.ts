import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PeopleService } from '../services/people.service';
import { IDQueryDTO } from '../dto/id-query.dto';
import { CPFQueryDTO } from '../dto/cpf-query.dto';
import { People } from 'src/database/entities/people.entity';
import { PeopleResponseDto } from '../dto/people-response.dto';
import { PageDto } from 'src/utils/dto/PageDto.dto';
import { PageOptionsDto } from 'src/utils/dto/PageOptionsDto.dto';
import { ApiPaginatedResponse } from 'src/utils/decorators/api-paginated-response.decorator';

@ApiTags('Peoples')
@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @ApiOperation({ summary: 'List people' })
  @ApiResponse({
    status: 200,
    description: 'People listing returned successfully',
    // type: PageDto,
  })
  @ApiPaginatedResponse(PeopleResponseDto)
  @Get()
  public async findAll(
    @Query() query: PageOptionsDto,
  ): Promise<PageDto<PeopleResponseDto>> {
    return this.peopleService.findAll(query);
  }

  @ApiOperation({ summary: 'Search people by ID' })
  @ApiResponse({
    status: 200,
    description: 'People returned successfully',
    type: [PeopleResponseDto],
  })
  @Get('id/:id([0-9]+)')
  public async findOneByID(
    @Param() data: IDQueryDTO,
  ): Promise<PeopleResponseDto> {
    return this.peopleService.findOneByID(data.id);
  }

  @ApiOperation({ summary: 'Search people by CPF' })
  @ApiResponse({
    status: 200,
    description: 'People returned successfully',
    type: PeopleResponseDto,
  })
  @Get('cpf/:cpf([0-9]+)')
  public async findOneByCPF(
    @Param() data: CPFQueryDTO,
  ): Promise<PeopleResponseDto> {
    return this.peopleService.findOneByCPF(data.cpf);
  }
}
