import { Module } from '@nestjs/common';
import { RpcConsumerController } from './rpc-consumer.controller';
import { RpcConsumerService } from './rpc-consumer.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    // 注册服务
    ClientsModule.register([
      {
        name: 'MATH_SERVICE', //给该服务取一个名字
        transport: Transport.TCP, //服务传输方式
        options: {
          host: '127.0.0.1',
          port: 2999,
        },
      },
    ]),
  ],
  controllers: [RpcConsumerController],
  providers: [RpcConsumerService],
})
export class RpcConsumerModule {}
