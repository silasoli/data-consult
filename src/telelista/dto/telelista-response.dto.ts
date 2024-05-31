import { ApiProperty } from '@nestjs/swagger';
import { Telelista } from '../../database/entities/telelista.entity';

export class TelelistaResponseDto {
  constructor(data: Telelista) {
    this.id = data.id;
    this.cpf = data.cpf.substring(3); // Remove os três primeiros caracteres do CPF
    this.name = data.name;
    this.place_type = data.place_type;
    this.street = data.street;
    this.house_number = data.house_number;
    this.complement = data.complement;
    this.neighborhood = data.neighborhood;
    this.cep = data.cep;
    this.city = data.city;
    this.state = data.state;
    this.phone = data.phone;
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
