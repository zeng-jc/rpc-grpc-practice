import { Controller, Get } from '@nestjs/common';
import { GrpcProviderService } from './grpc-provider.service';

@Controller()
export class GrpcProviderController {
  constructor(private readonly grpcProviderService: GrpcProviderService) {}

  @Get()
  getHello(): string {
    return this.grpcProviderService.getHello();
  }
}
