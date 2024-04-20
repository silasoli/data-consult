import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { TelelistaService } from '../services/telelista.service';
import { TelelistaResponseDto } from '../dto/telelista-response.dto';
import { CPFQueryDTO } from '../../common/dto/cpf-query.dto';
import { IDPostgresQueryDTO } from '../../common/dto/id-postgres-query.dto';
import { NameQueryDTO } from '../../common/dto/name-query.dto';
import { Role } from '../../roles/decorators/roles.decorator';
import Roles from '../../roles/enums/role.enum';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthUserJwtGuard } from '../../auth/guards/auth-user-jwt.guard';
import { RoleGuard } from '../../roles/guards/role.guard';
import { PhoneQueryDTO } from '../../common/dto/phone-query.dto';

@ApiBearerAuth()
@ApiTags('Telelista')
@Controller('telelista')
@UseGuards(AuthUserJwtGuard, RoleGuard)
export class TelelistaController {
  constructor(private readonly telelistaService: TelelistaService) {}

  @ApiOperation({ summary: 'Search person by ID' })
  @ApiResponse({
    status: 200,
    description: 'Person returned successfully',
    type: TelelistaResponseDto,
  })
  @Role([Roles.ADMIN, Roles.USER])
  @Get('id/:id([0-9]+)')
  public async findOneByID(
    @Param() data: IDPostgresQueryDTO,
  ): Promise<TelelistaResponseDto> {
    return this.telelistaService.findOneByID(data.id);
  }

  @ApiOperation({ summary: 'Search people by CPF' })
  @ApiResponse({
    status: 200,
    description: 'Person returned successfully',
    type: TelelistaResponseDto,
  })
  @Role([Roles.ADMIN, Roles.USER])
  @Get('cpf/:cpf([0-9]+)')
  public async findOneByDocument(
    @Param() data: CPFQueryDTO,
  ): Promise<TelelistaResponseDto[]> {
    return this.telelistaService.findByCPF(data.cpf);
  }

  @ApiOperation({ summary: 'Search people by Phone' })
  @ApiResponse({
    status: 200,
    description: 'Person returned successfully',
    type: TelelistaResponseDto,
  })
  @Role([Roles.ADMIN, Roles.USER])
  @Get('phone/:phone([0-9]+)')
  public async findByPhone(
    @Param() data: PhoneQueryDTO,
  ): Promise<TelelistaResponseDto[]> {
    return this.telelistaService.findByPhone(data.phone);
  }

  @ApiOperation({ summary: 'Search people by Name' })
  @ApiResponse({
    status: 200,
    description: 'Person returned successfully',
    type: TelelistaResponseDto,
  })
  @Role([Roles.ADMIN, Roles.USER])
  @Get('name/:name')
  public async findOneByPhone(
    @Param() data: NameQueryDTO,
  ): Promise<TelelistaResponseDto[]> {
    return this.telelistaService.findByName(data.name);
  }
}
