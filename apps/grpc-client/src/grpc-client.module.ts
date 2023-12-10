import { Module } from '@nestjs/common';
import { GrpcClientController } from './grpc-client.controller';
import { GrpcClientService } from './grpc-client.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HERO_SERVICE', //自定义服务名字
        transport: Transport.GRPC,
        options: {
          url: '127.0.0.1:3001', //gRPC服务地址
          package: 'hero',
          protoPath: join(__dirname, '/proto/hero.proto'),
        },
      },
    ]),
  ],
  controllers: [GrpcClientController],
  providers: [GrpcClientService],
})
export class GrpcClientModule {}
