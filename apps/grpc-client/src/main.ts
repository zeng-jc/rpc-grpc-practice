import { NestFactory } from '@nestjs/core';
import { GrpcClientModule } from './grpc-client.module';

async function bootstrap() {
  const app = await NestFactory.create(GrpcClientModule);
  await app.listen(3000);
}
bootstrap();
