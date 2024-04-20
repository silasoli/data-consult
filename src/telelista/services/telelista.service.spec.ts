import { Test, TestingModule } from '@nestjs/testing';
import { TelelistaService } from './telelista.service';

describe('TelelistaService', () => {
  let service: TelelistaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TelelistaService],
    }).compile();

    service = module.get<TelelistaService>(TelelistaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
