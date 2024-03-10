import { ApiProperty } from '@nestjs/swagger';
import { People } from 'src/database/entities/people.entity';

export class PeopleResponseDto {
  constructor(people: People) {
    Object.assign(this, people);
  }

  @ApiProperty({ required: true })
  id: number;

  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  cpf: string;

  @ApiProperty({ required: true })
  date_birth: string;

  @ApiProperty({ required: true })
  mother_name: string;

  @ApiProperty({ required: true })
  street: string;

  @ApiProperty({ required: true })
  house_number: string;

  @ApiProperty({ required: true })
  complement: string;

  @ApiProperty({ required: true })
  neighborhood: string;

  @ApiProperty({ required: true })
  city: string;

  @ApiProperty({ required: true })
  state: string;

  @ApiProperty({ required: true })
  cep: string;
}
