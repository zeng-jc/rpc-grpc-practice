import { Test, TestingModule } from '@nestjs/testing';
import { RpcConsumerController } from './rpc-consumer.controller';
import { RpcConsumerService } from './rpc-consumer.service';

describe('RpcConsumerController', () => {
  let rpcConsumerController: RpcConsumerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RpcConsumerController],
      providers: [RpcConsumerService],
    }).compile();

    rpcConsumerController = app.get<RpcConsumerController>(RpcConsumerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(rpcConsumerController.getHello()).toBe('Hello World!');
    });
  });
});
