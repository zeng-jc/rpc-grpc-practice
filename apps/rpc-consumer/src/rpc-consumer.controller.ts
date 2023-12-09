import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { RpcConsumerService } from './rpc-consumer.service';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class RpcConsumerController {
  constructor(
    private readonly rpcConsumerService: RpcConsumerService,
    @Inject('MATH_SERVICE') private client: ClientProxy,
  ) {}

  @Post()
  // 说明：Observable是一个可被观察的流，需要安装rxjs(pnpm i rxjs)
  callService(@Body('nums') nums: number[]): Observable<number> {
    // emit调用EventPattern
    this.client.emit('notice', 'xxx');
    // 返回的是一个Observable对象
    return this.client.send<number>('calc', nums);
  }

  @Get()
  getHello(): string {
    return this.rpcConsumerService.getHello();
  }
}
