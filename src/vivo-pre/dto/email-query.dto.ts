import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class EmailQueryDTO {
  @ApiProperty({ required: true, description: 'Send a valid Email' })
  @IsNotEmpty({ message: 'Email cannot be empty.' })
  @IsEmail({}, { message: 'Send a valid Email' })
  @Type(() => String)
  email: string;
}
