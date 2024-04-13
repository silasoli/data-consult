import { UnauthorizedException } from '@nestjs/common';

export const COUNCIL_ERRORS = {
  INVALID_KEY: new UnauthorizedException({
    id: 'CNL-001',
    message: 'Serviço não disponível',
  }),
};
