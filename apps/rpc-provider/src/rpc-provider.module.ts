import { Module } from '@nestjs/common';
import { RpcProviderController } from './rpc-provider.controller';
import { RpcProviderService } from './rpc-provider.service';

@Module({
  imports: [],
  controllers: [RpcProviderController],
  providers: [RpcProviderService],
})
export class RpcProviderModule {}
