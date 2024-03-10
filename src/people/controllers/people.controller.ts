import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PeopleService } from '../services/people.service';
import { IDQueryDTO } from '../dto/id-query.dto';
import { CPFQueryDTO } from '../dto/cpf-query.dto';
import { People } from 'src/database/entities/people.entity';

@ApiTags('Peoples')
@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @ApiOperation({ summary: 'List people' })
  @ApiResponse({
    status: 200,
    description: 'People listing returned successfully',
    type: [People],
  })
  @Get()
  public async findAll(): Promise<any> {
    return this.peopleService.findAll();
  }

  @ApiOperation({ summary: 'Search people by ID' })
  @ApiResponse({
    status: 200,
    description: 'People returned successfully',
    type: [People],
  })
  @Get('id/:id([0-9]+)')
  public async findOneByID(@Param() data: IDQueryDTO): Promise<any> {
    return this.peopleService.findOneByID(data.id);
  }

  @ApiOperation({ summary: 'Search people by CPF' })
  @ApiResponse({
    status: 200,
    description: 'People returned successfully',
    type: [People],
  })
  @Get('cpf/:cpf([0-9]+)')
  public async findOneByCPF(@Param() data: CPFQueryDTO): Promise<any> {
    return this.peopleService.findOneByCPF(data.cpf);
  }
}
