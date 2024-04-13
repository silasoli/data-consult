import { Test, TestingModule } from '@nestjs/testing';
import { CouncilService } from './council.service';

describe('CouncilService', () => {
  let service: CouncilService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CouncilService],
    }).compile();

    service = module.get<CouncilService>(CouncilService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
