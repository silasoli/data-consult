import { ApiProperty } from '@nestjs/swagger';
import { VivoPre } from '../../database/entities/vivo-pre.entity';

export class VivoPreResponseDto {
  constructor(person: VivoPre) {
    Object.assign(this, person);
  }

  @ApiProperty({ required: true })
  id: number;

  @ApiProperty({ required: true })
  phone: string;

  @ApiProperty({ required: true })
  person_type: string;

  @ApiProperty({ required: true })
  status: string;

  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  document: string;

  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: true })
  street: string;

  @ApiProperty({ required: true })
  house_number: string;

  @ApiProperty({ required: true })
  complement: string;

  @ApiProperty({ required: true })
  neighborhood: string;

  @ApiProperty({ required: true })
  state: string;

  @ApiProperty({ required: true })
  cep: string;
}
