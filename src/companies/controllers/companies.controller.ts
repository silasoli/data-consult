import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { CompaniesService } from '../services/companies.service';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AxiosResponse } from 'axios';
import { Company } from '../types/companies.type';
import { CompanyResponseDto } from '../dto/companies-response.dto';
import { CNPJQueryDTO } from '../dto/cnpj-query.dto';
import { Role } from '../../roles/decorators/roles.decorator';
import Roles from '../../roles/enums/role.enum';
import { AuthUserJwtGuard } from '../../auth/guards/auth-user-jwt.guard';
import { RoleGuard } from '../../roles/guards/role.guard';

@ApiBearerAuth()
@ApiTags('Companies')
@Controller('companies')
@UseGuards(AuthUserJwtGuard, RoleGuard)
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @ApiOperation({ summary: 'Find company by CNPJ' })
  @ApiOkResponse({
    status: 200,
    type: CompanyResponseDto,
    description: 'Company returned successfully',
  })
  @Role([Roles.ADMIN, Roles.USER])
  @Get('cnpj/:cnpj')
  findOne(@Param() data: CNPJQueryDTO): Promise<AxiosResponse<Company>> {
    return this.companiesService.findOne(data.cnpj);
  }
}
