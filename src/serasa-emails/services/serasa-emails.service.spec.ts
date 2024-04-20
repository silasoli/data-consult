import { Test, TestingModule } from '@nestjs/testing';
import { SerasaEmailsService } from './serasa-emails.service';

describe('SerasaEmailsService', () => {
  let service: SerasaEmailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SerasaEmailsService],
    }).compile();

    service = module.get<SerasaEmailsService>(SerasaEmailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
