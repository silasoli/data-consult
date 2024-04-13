import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { QueryCouncilDTO } from '../dto/query-council.dto';
import { COUNCIL_ERRORS } from '../constants/companies-errors';
import { CouncilItem } from '../types/council.type';
import { CouncilResponseDto } from '../dto/council-response.dto';

@Injectable()
export class CouncilService {
  constructor(
    private readonly httpService: HttpService,
    private readonly config: ConfigService,
  ) {}

  private async getAPI(query: QueryCouncilDTO) {
    const COUNCIL_DEFAULT = 'crm';
    const COUNCIL_API_URL = this.config.get('COUNCIL_API_URL');
    const COUNCIL_API_KEY1 = this.config.get('COUNCIL_API_KEY1');

    const response = await this.httpService.axiosRef.get(
      `${COUNCIL_API_URL}?tipo=${COUNCIL_DEFAULT}&uf=${query.state || ''}&q=${query.search || ''}&chave=${COUNCIL_API_KEY1}&destino=json`,
    );

    if (response.data === 'Chave API nao habilitada')
      throw COUNCIL_ERRORS.INVALID_KEY;

    return response.data;
  }

  public async findAll(query: QueryCouncilDTO) {
    const data = await this.getAPI(query);

    if (!data.item) return [];

    return data.item.map((item: CouncilItem) => new CouncilResponseDto(item));
  }
}
