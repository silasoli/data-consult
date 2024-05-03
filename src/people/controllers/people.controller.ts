import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PeopleService } from '../services/people.service';
import { CPFQueryDTO } from '../../common/dto/cpf-query.dto';
import { PeopleResponseDto } from '../dto/people-response.dto';
import { PageDto } from '../../utils/dto/PageDto.dto';
import { ApiPaginatedResponse } from '../../utils/decorators/api-paginated-response.decorator';
import { PeopleQueryDto } from '../dto/people-query.dto';
import { AuthUserJwtGuard } from '../../auth/guards/auth-user-jwt.guard';
import { Role } from '../../roles/decorators/roles.decorator';
import Roles from '../../roles/enums/role.enum';
import { RoleGuard } from '../../roles/guards/role.guard';
import { IDPostgresQueryDTO } from '../../common/dto/id-postgres-query.dto';

@ApiBearerAuth()
@ApiTags('Gov')
@Controller('gov')
@UseGuards(AuthUserJwtGuard, RoleGuard)
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @ApiOperation({ summary: 'List people' })
  @ApiPaginatedResponse({
    status: 200,
    type: PeopleResponseDto,
    description: 'People listing returned successfully',
  })
  @Role([Roles.ADMIN, Roles.USER])
  @Get()
  public async findAll(
    @Query() query: PeopleQueryDto,
  ): Promise<PageDto<PeopleResponseDto>> {
    return this.peopleService.findAll(query);
  }

  @ApiOperation({ summary: 'Search people by ID' })
  @ApiResponse({
    status: 200,
    description: 'People returned successfully',
    type: PeopleResponseDto,
  })
  @Role([Roles.ADMIN, Roles.USER])
  @Get('id/:id([0-9]+)')
  public async findOneByID(
    @Param() data: IDPostgresQueryDTO,
  ): Promise<PeopleResponseDto> {
    return this.peopleService.findOneByID(data.id);
  }

  @ApiOperation({ summary: 'Search people by CPF' })
  @ApiResponse({
    status: 200,
    description: 'People returned successfully',
    type: PeopleResponseDto,
  })
  @Role([Roles.ADMIN, Roles.USER])
  @Get('cpf/:cpf([0-9]+)')
  public async findOneByCPF(
    @Param() data: CPFQueryDTO,
  ): Promise<PeopleResponseDto> {
    return this.peopleService.findOneByCPF(data.cpf);
  }
}
