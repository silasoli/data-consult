import { Controller, Get, Request } from '@nestjs/common';
import { RoutesService } from '../services/routes.service';
import { Request as ExpressRequest } from 'express';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Routes')
@Controller('routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}

  @Get()
  findAll(@Request() req: ExpressRequest): any {
    return this.routesService.getRoutes(req);
  }
}
