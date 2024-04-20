import { ApiProperty } from '@nestjs/swagger';
import { SerasaEmails } from '../../database/entities/serasa-emails.entity';

export class SerasaEmailsResponseDto {
  constructor(person: SerasaEmails) {
    Object.assign(this, person);
  }

  @ApiProperty({ required: true })
  id: number;

  @ApiProperty({ required: true })
  cpf: string;

  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  date_birth: string;

  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: true })
  score: string;

  @ApiProperty({ required: true })
  personal_email: boolean
}
