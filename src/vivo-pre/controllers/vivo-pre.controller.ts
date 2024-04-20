import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { VivoPreService } from '../services/vivo-pre.service';
import {
  ApiBearerAuth,
  ApiResponse,
  ApiTags,
  ApiOperation,
} from '@nestjs/swagger';
import { AuthUserJwtGuard } from '../../auth/guards/auth-user-jwt.guard';
import { RoleGuard } from '../../roles/guards/role.guard';
import { DocumentQueryDTO } from '../dto/document-query.dto';
import { EmailQueryDTO } from '../dto/email-query.dto';
import { PhoneQueryDTO } from '../../common/dto/phone-query.dto';
import { Role } from '../../roles/decorators/roles.decorator';
import Roles from '../../roles/enums/role.enum';
import { VivoPreResponseDto } from '../dto/vivo-pre-response.dto';
import { IDPostgresQueryDTO } from '../../common/dto/id-postgres-query.dto';

@ApiBearerAuth()
@ApiTags('Vivo Pre')
@Controller('vivo-pre')
@UseGuards(AuthUserJwtGuard, RoleGuard)
export class VivoPreController {
  constructor(private readonly vivoPreService: VivoPreService) {}

  @ApiOperation({ summary: 'Search person by ID' })
  @ApiResponse({
    status: 200,
    description: 'Person returned successfully',
    type: VivoPreResponseDto,
  })
  @Role([Roles.ADMIN, Roles.USER])
  @Get('id/:id([0-9]+)')
  public async findOneByID(
    @Param() data: IDPostgresQueryDTO,
  ): Promise<VivoPreResponseDto> {
    return this.vivoPreService.findOneByID(data.id);
  }

  @ApiOperation({ summary: 'Search people by CPF/CNPJ' })
  @ApiResponse({
    status: 200,
    description: 'Person returned successfully',
    type: VivoPreResponseDto,
  })
  @Role([Roles.ADMIN, Roles.USER])
  @Get('document/:document([0-9]+)')
  public async findOneByDocument(
    @Param() data: DocumentQueryDTO,
  ): Promise<VivoPreResponseDto> {
    return this.vivoPreService.findOneByDocument(data.document);
  }

  @ApiOperation({ summary: 'Search people by Email' })
  @ApiResponse({
    status: 200,
    description: 'Person returned successfully',
    type: VivoPreResponseDto,
  })
  @Role([Roles.ADMIN, Roles.USER])
  @Get('email/:email')
  public async findOneByEmail(
    @Param() data: EmailQueryDTO,
  ): Promise<VivoPreResponseDto> {
    return this.vivoPreService.findOneByEmail(data.email);
  }

  @ApiOperation({ summary: 'Search people by Phone' })
  @ApiResponse({
    status: 200,
    description: 'Person returned successfully',
    type: VivoPreResponseDto,
  })
  @Role([Roles.ADMIN, Roles.USER])
  @Get('phone/:phone')
  public async findOneByPhone(
    @Param() data: PhoneQueryDTO,
  ): Promise<VivoPreResponseDto> {
    return this.vivoPreService.findOneByPhone(data.phone);
  }
}
