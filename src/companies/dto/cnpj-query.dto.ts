import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsNotEmpty, MinLength } from 'class-validator';

export class CNPJQueryDTO {
  @ApiProperty({ required: true, description: 'Send a valid CNPJ' })
  @IsNotEmpty({ message: 'CNPJ cannot be empty.' })
  @MinLength(14)
  @Transform(({ value }) => value.replace(/[^\d]+/g, ''))
  @Type(() => String)
  cnpj: string;
}
