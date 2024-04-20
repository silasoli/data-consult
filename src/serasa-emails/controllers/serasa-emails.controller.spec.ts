import { Test, TestingModule } from '@nestjs/testing';
import { SerasaEmailsController } from './serasa-emails.controller';
import { SerasaEmailsService } from '../services/serasa-emails.service';

describe('SerasaEmailsController', () => {
  let controller: SerasaEmailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SerasaEmailsController],
      providers: [SerasaEmailsService],
    }).compile();

    controller = module.get<SerasaEmailsController>(SerasaEmailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
