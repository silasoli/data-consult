import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse, HttpStatusCode } from 'axios';
import { Company } from '../types/companies.type';
import { COMPANIES_ERRORS } from '../constants/companies-errors';

@Injectable()
export class CompaniesService {
  constructor(
    private readonly httpService: HttpService,
    private readonly config: ConfigService,
  ) {}

  public async findOne(cnpj: string): Promise<AxiosResponse<Company>> {
    try {
      const COMPANY_API_URL = this.config.get('COMPANY_API_URL');
      const response = await this.httpService.axiosRef.get(
        `${COMPANY_API_URL}/${cnpj}`,
      );

      if (response.data?.message === 'CNPJ inválido')
        throw COMPANIES_ERRORS.INVALID_CNPJ;

      return response.data as AxiosResponse<Company>;
    } catch (error) {
      if (error?.response.status === HttpStatusCode.TooManyRequests)
        throw COMPANIES_ERRORS.MANY_REQUESTS;

      if (error?.response.status === HttpStatusCode.NotFound)
        throw COMPANIES_ERRORS.NOT_FOUND;

      if (error?.status === HttpStatusCode.UnprocessableEntity)
        throw COMPANIES_ERRORS.INVALID_CNPJ;
    }
  }
}
