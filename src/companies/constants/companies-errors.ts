import {
  NotFoundException,
  RequestTimeoutException,
  UnprocessableEntityException,
} from '@nestjs/common';

export const COMPANIES_ERRORS = {
  INVALID_CNPJ: new UnprocessableEntityException({
    id: 'CPY-001',
    message: 'CNPJ inválido.',
  }),
  NOT_FOUND: new NotFoundException({
    id: 'CPY-002',
    message: 'CNPJ não encontrado.',
  }),
  MANY_REQUESTS: new RequestTimeoutException({
    id: 'CPY-003',
    message: 'Você realizou muitas requisições, aguarde!.',
  }),
};
