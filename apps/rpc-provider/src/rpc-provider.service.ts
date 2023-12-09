import { Injectable } from '@nestjs/common';

@Injectable()
export class RpcProviderService {
  getHello(): string {
    return 'Hello World!';
  }
}
