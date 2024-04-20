import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { SerasaEmailsService } from '../services/serasa-emails.service';
import { IDQueryDTO } from '../../people/dto/id-query.dto';
import { CPFQueryDTO } from '../../people/dto/cpf-query.dto';
import { EmailQueryDTO } from '../../vivo-pre/dto/email-query.dto';
import { NameQueryDTO } from '../dto/name-query.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthUserJwtGuard } from '../../auth/guards/auth-user-jwt.guard';
import { RoleGuard } from '../../roles/guards/role.guard';
import { Role } from '../../roles/decorators/roles.decorator';
import Roles from '../../roles/enums/role.enum';
import { SerasaEmailsResponseDto } from '../dto/serasa-emails-response.dto';

@ApiBearerAuth()
@ApiTags('Serasa Emails')
@Controller('serasa-emails')
@UseGuards(AuthUserJwtGuard, RoleGuard)
export class SerasaEmailsController {
  constructor(private readonly serasaEmailsService: SerasaEmailsService) {}

  @ApiOperation({ summary: 'Search person by ID' })
  @ApiResponse({
    status: 200,
    description: 'Person returned successfully',
    type: SerasaEmailsResponseDto,
  })
  @Role([Roles.ADMIN, Roles.USER])
  @Get('id/:id([0-9]+)')
  public async findOneByID(
    @Param() data: IDQueryDTO,
  ): Promise<SerasaEmailsResponseDto> {
    return this.serasaEmailsService.findOneByID(data.id);
  }

  @ApiOperation({ summary: 'Search people by CPF' })
  @ApiResponse({
    status: 200,
    description: 'Person returned successfully',
    type: SerasaEmailsResponseDto,
  })
  @Role([Roles.ADMIN, Roles.USER])
  @Get('cpf/:cpf([0-9]+)')
  public async findOneByDocument(
    @Param() data: CPFQueryDTO,
  ): Promise<SerasaEmailsResponseDto[]> {
    return this.serasaEmailsService.findByCPF(data.cpf);
  }

  @ApiOperation({ summary: 'Search people by Email' })
  @ApiResponse({
    status: 200,
    description: 'Person returned successfully',
    type: SerasaEmailsResponseDto,
  })
  @Role([Roles.ADMIN, Roles.USER])
  @Get('email/:email')
  public async findOneByEmail(
    @Param() data: EmailQueryDTO,
  ): Promise<SerasaEmailsResponseDto[]> {
    return this.serasaEmailsService.findByEmail(data.email);
  }

  @ApiOperation({ summary: 'Search people by Name' })
  @ApiResponse({
    status: 200,
    description: 'Person returned successfully',
    type: SerasaEmailsResponseDto,
  })
  @Role([Roles.ADMIN, Roles.USER])
  @Get('name/:name')
  public async findOneByPhone(
    @Param() data: NameQueryDTO,
  ): Promise<SerasaEmailsResponseDto[]> {
    return this.serasaEmailsService.findByName(data.name);
  }
}
