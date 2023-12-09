import { NestFactory } from '@nestjs/core';
import { RpcConsumerModule } from './rpc-consumer.module';

async function bootstrap() {
  const app = await NestFactory.create(RpcConsumerModule);
  await app.listen(3000);
}
bootstrap();
