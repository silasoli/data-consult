import { Test, TestingModule } from '@nestjs/testing';
import { VivoPreService } from './vivo-pre.service';

describe('VivoPreService', () => {
  let service: VivoPreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VivoPreService],
    }).compile();

    service = module.get<VivoPreService>(VivoPreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
