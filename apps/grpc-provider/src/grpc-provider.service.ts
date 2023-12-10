import { Injectable } from '@nestjs/common';

@Injectable()
export class GrpcProviderService {
  getHello(): string {
    return 'Hello World!';
  }
}
