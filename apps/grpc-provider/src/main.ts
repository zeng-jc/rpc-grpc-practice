import { NestFactory } from '@nestjs/core';
import { GrpcProviderModule } from './grpc-provider.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    GrpcProviderModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'hero',
        protoPath: join(__dirname, 'proto/hero.proto'),
        url: '127.0.0.1:3001',
      },
    },
  );
  await app.listen();
}
bootstrap();
