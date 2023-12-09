import { NestFactory } from '@nestjs/core';
import { RpcProviderModule } from './rpc-provider.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    RpcProviderModule,
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 2999,
      },
    },
  );
  await app.listen();
}
bootstrap();
