import { Test, TestingModule } from '@nestjs/testing';
import { VivoPreController } from './vivo-pre.controller';
import { VivoPreService } from '../services/vivo-pre.service';

describe('VivoPreController', () => {
  let controller: VivoPreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VivoPreController],
      providers: [VivoPreService],
    }).compile();

    controller = module.get<VivoPreController>(VivoPreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
