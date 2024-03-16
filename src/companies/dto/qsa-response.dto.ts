import { ApiProperty } from '@nestjs/swagger';
import { Qsa } from '../types/companies.type';

export class QSAResponseDto {
  constructor(qsa: Qsa) {
    return {
      name: qsa?.nome || null,
      which: qsa?.qual || null,
    };
  }

  @ApiProperty({ required: false })
  name: string;

  @ApiProperty({ required: false })
  which: string;
}
