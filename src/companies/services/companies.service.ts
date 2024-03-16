import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { Company } from '../types/companies.type';

@Injectable()
export class CompaniesService {
  constructor(
    private readonly httpService: HttpService,
    private readonly config: ConfigService,
  ) {}

  public async findOne(cnpj: string): Promise<AxiosResponse<Company>> {
    const response = await this.httpService.axiosRef.get(
      `/${cnpj}`,
    );

    return response.data as AxiosResponse<Company>;
  }
}
