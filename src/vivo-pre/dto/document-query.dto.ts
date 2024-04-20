import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class DocumentQueryDTO {
  @ApiProperty({ required: true, description: 'Send a valid CPF/CNPJ' })
  @IsNotEmpty({ message: 'CPF/CNPJ cannot be empty.' })
  @Transform(({ value }) => value.replace(/[^\d]+/g, ''))
  @MinLength(11)
  @MaxLength(14)
  @Type(() => String)
  document: string;
}
