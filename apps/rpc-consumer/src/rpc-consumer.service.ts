import { Injectable } from '@nestjs/common';

@Injectable()
export class RpcConsumerService {
  getHello(): string {
    return 'Hello World!';
  }
}
