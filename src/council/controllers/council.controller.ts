import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { CouncilService } from '../services/council.service';
import { QueryCouncilDTO } from '../dto/query-council.dto';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CouncilResponseDto } from '../dto/council-response.dto';
import { RoleGuard } from '../../roles/guards/role.guard';
import { Roles } from '../../roles/enums/role.enum';
import { AuthUserJwtGuard } from '../../auth/guards/auth-user-jwt.guard';
import { Role } from '../../roles/decorators/roles.decorator';

@ApiBearerAuth()
@ApiTags('Council')
@Controller('council')
@UseGuards(AuthUserJwtGuard, RoleGuard)
export class CouncilController {
  constructor(private readonly councilService: CouncilService) {}

  @ApiOperation({ summary: 'Search in CRM' })
  @ApiOkResponse({
    status: 200,
    type: [CouncilResponseDto],
    description: 'Data returned successfully',
  })
  @Role([Roles.ADMIN, Roles.USER])
  @Get('crm')
  public async findAll(@Query() query: QueryCouncilDTO) {
    return this.councilService.findAll(query);
  }
}
