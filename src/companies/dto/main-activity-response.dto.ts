import { ApiProperty } from '@nestjs/swagger';
import { MainActivity } from '../types/companies.type';

export class MainActivityResponseDto {
  constructor(mainActivity: MainActivity) {
    return {
      code: mainActivity?.code || null,
      text: mainActivity?.text || null,
    };
  }

  @ApiProperty({ required: false })
  code: string;

  @ApiProperty({ required: false })
  text: string;
}
