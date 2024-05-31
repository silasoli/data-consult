import { ApiProperty } from '@nestjs/swagger';
import { Telelista } from '../../database/entities/telelista.entity';

export class TelelistaResponseDto {
  constructor(data: Telelista) {
    Object.assign(this, { ...data, cpf: data?.cpf.substring(3) });
  }

  @ApiProperty({ required: true })
  id: number;

  @ApiProperty({ required: true })
  cpf: string;

  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  place_type: string;

  @ApiProperty({ required: true })
  street: string;

  @ApiProperty({ required: true })
  house_number: string;

  @ApiProperty({ required: true })
  complement: string;

  @ApiProperty({ required: true })
  neighborhood: string;

  @ApiProperty({ required: true })
  cep: string;

  @ApiProperty({ required: true })
  city: string;

  @ApiProperty({ required: true })
  state: string;

  @ApiProperty({ required: true })
  phone: string;
}
