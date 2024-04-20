import { Test, TestingModule } from '@nestjs/testing';
import { TelelistaController } from './telelista.controller';
import { TelelistaService } from '../services/telelista.service';

describe('TelelistaController', () => {
  let controller: TelelistaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TelelistaController],
      providers: [TelelistaService],
    }).compile();

    controller = module.get<TelelistaController>(TelelistaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
