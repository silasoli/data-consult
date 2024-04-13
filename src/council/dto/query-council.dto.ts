import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsOptional } from 'class-validator';

export enum CouncilEnum {
  CRM = 'CRM',
  CRO = 'CRO',
  CREA = 'CREA',
  CFC = 'CFC',
  CREF = 'CREF',
  OAB = 'OAB',
  CRP = 'CRP',
  CRF = 'CRF',
  CAU = 'CAU',
}

export enum UFEnum {
  AC = 'AC',
  AL = 'AL',
  AP = 'AP',
  AM = 'AM',
  BA = 'BA',
  CE = 'CE',
  DF = 'DF',
  ES = 'ES',
  GO = 'GO',
  MA = 'MA',
  MT = 'MT',
  MS = 'MS',
  MG = 'MG',
  PA = 'PA',
  PB = 'PB',
  PR = 'PR',
  PE = 'PE',
  PI = 'PI',
  RJ = 'RJ',
  RN = 'RN',
  RS = 'RS',
  RO = 'RO',
  RR = 'RR',
  SC = 'SC',
  SP = 'SP',
  SE = 'SE',
  TO = 'TO',
}

export class QueryCouncilDTO {
//   @ApiProperty({ required: false })
//   @IsOptional()
//   @IsEnum(CouncilEnum, { message: 'Conselho não disponível.' })
//   council: CouncilEnum;

  @ApiProperty({ required: false })
  @IsOptional()
  @Type(() => String)
  @IsEnum(UFEnum, { message: 'Estado não encontrado.' })
  state: UFEnum;

  @ApiProperty({ required: false })
  @IsOptional()
  @Type(() => String)
  search: string;
}
