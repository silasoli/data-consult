import { ApiProperty } from '@nestjs/swagger';
import { Billing } from '../types/companies.type';

export class BillingResponseDto {
  constructor(billing: Billing) {
    return {
      database: billing?.database || null,
      free: billing?.free || null,
    };
  }

  @ApiProperty({ required: false })
  database: boolean;

  @ApiProperty({ required: false })
  free: boolean;
}
