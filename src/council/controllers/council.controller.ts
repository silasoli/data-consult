import { Controller, Get, Query } from '@nestjs/common';
import { CouncilService } from '../services/council.service';
import { QueryCouncilDTO } from '../dto/query-council.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CouncilResponseDto } from '../dto/council-response.dto';

@ApiTags('Council')
@Controller('council')
export class CouncilController {
  constructor(private readonly councilService: CouncilService) {}

  @ApiOperation({ summary: 'Search in CRM' })
  @ApiOkResponse({
    status: 200,
    type: [CouncilResponseDto],
    description: 'Data returned successfully',
  })
  @Get('crm')
  public async findAll(@Query() query: QueryCouncilDTO) {
    return this.councilService.findAll(query);
  }
}
