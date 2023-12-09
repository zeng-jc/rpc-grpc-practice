import { Test, TestingModule } from '@nestjs/testing';
import { RpcProviderController } from './rpc-provider.controller';
import { RpcProviderService } from './rpc-provider.service';

describe('RpcProviderController', () => {
  let rpcProviderController: RpcProviderController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RpcProviderController],
      providers: [RpcProviderService],
    }).compile();

    rpcProviderController = app.get<RpcProviderController>(RpcProviderController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(rpcProviderController.getHello()).toBe('Hello World!');
    });
  });
});
