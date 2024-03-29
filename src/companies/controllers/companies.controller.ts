import { Controller, Get, Param } from '@nestjs/common';
import { CompaniesService } from '../services/companies.service';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AxiosResponse } from 'axios';
import { Company } from '../types/companies.type';
import { CompanyResponseDto } from '../dto/companies-response.dto';


@ApiTags('Companies')
@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @ApiOperation({ summary: 'Find company by CNPJ' })
  @ApiOkResponse({
    status: 200,
    type: CompanyResponseDto,
    description: 'Company returned successfully',
  })
  @Get(':cnpj')
  findOne(@Param('cnpj') cnpj: string): Promise<AxiosResponse<Company>> {
    return this.companiesService.findOne(cnpj);
  }
}
