import { ApiProperty } from '@nestjs/swagger';
import { CouncilItem } from '../types/council.type';

export class CouncilResponseDto {
  constructor(item: CouncilItem) {

    return {
      type: item?.tipo || null,
      name: item?.nome || null,
      number: item?.numero || null,
      profession: item?.profissao || null,
      state: item?.uf || null,
      situation: item?.situacao || null,
    };
  }

  @ApiProperty({ required: true })
  type: string;

  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  number: string;

  @ApiProperty({ required: true })
  profession: string;

  @ApiProperty({ required: true })
  state: string;

  @ApiProperty({ required: true })
  situation: string;
}
