import { Test, TestingModule } from '@nestjs/testing';
import { GrpcProviderController } from './grpc-provider.controller';
import { GrpcProviderService } from './grpc-provider.service';

describe('GrpcProviderController', () => {
  let grpcProviderController: GrpcProviderController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GrpcProviderController],
      providers: [GrpcProviderService],
    }).compile();

    grpcProviderController = app.get<GrpcProviderController>(GrpcProviderController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(grpcProviderController.getHello()).toBe('Hello World!');
    });
  });
});
