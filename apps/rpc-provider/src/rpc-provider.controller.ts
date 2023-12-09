import { Controller, Get } from '@nestjs/common';
import { RpcProviderService } from './rpc-provider.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class RpcProviderController {
  constructor(private readonly rpcProviderService: RpcProviderService) {}

  @MessagePattern('calc')
  async accumulate(nums: number[]): Promise<number> {
    console.log('微服务提供者 MessagePattern', nums);
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(nums.reduce((pre, cur) => pre + cur, 0));
      }, 10);
    });
  }

  @EventPattern('notice')
  handleUserCreated(data: string): void {
    console.log('微服务提供者 EventPattern', data);
  }

  @Get()
  getHello(): string {
    return this.rpcProviderService.getHello();
  }
}
