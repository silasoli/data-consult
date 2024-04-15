import { ApiPropertyOptional } from '@nestjs/swagger';
import { PageOptionsDto } from '../../utils/dto/PageOptionsDto.dto';
import { IsOptional, MinLength } from 'class-validator';
import { Transform, Type } from 'class-transformer';


export class PeopleQueryDto extends PageOptionsDto {
  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => String)
  name: string;

  @ApiPropertyOptional()
  @IsOptional()
  @Transform(({ value }) => value.replace(/[^\d]+/g, ''))
  @MinLength(11)
  @Type(() => String)
  cpf: string;

  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => String)
  mother_name: string;
}
