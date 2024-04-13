import { Test, TestingModule } from '@nestjs/testing';
import { CouncilController } from './council.controller';
import { CouncilService } from '../services/council.service';

describe('CouncilController', () => {
  let controller: CouncilController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CouncilController],
      providers: [CouncilService],
    }).compile();

    controller = module.get<CouncilController>(CouncilController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
