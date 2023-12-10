import { Module } from '@nestjs/common';
import { GrpcProviderController } from './grpc-provider.controller';
import { GrpcProviderService } from './grpc-provider.service';
import { HeroesModule } from './heroes/heroes.module';

@Module({
  imports: [HeroesModule],
  controllers: [GrpcProviderController],
  providers: [GrpcProviderService],
})
export class GrpcProviderModule {}
