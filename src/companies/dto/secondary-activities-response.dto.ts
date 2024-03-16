import { ApiProperty } from '@nestjs/swagger';
import { SecondaryActivities } from '../types/companies.type';

export class SecondaryActivitiesResponseDto {
  constructor(secondaryActivities: SecondaryActivities) {
    return {
      code: secondaryActivities?.code || null,
      text: secondaryActivities?.text || null,
    };
  }

  @ApiProperty({ required: false })
  code: string;

  @ApiProperty({ required: false })
  text: string;
}
