import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';

interface HeroById {
  id: number;
}
interface Hero {
  id: number;
  name: string;
}

@Controller()
export class HeroesController {
  // 如下两个参数都是对应proto文件的内容，两个都可以省略，nestjs会自动转换名字大小写去匹配
  @GrpcMethod('HeroesService', 'FindOne')
  findOne(
    data: HeroById,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ): Hero {
    console.log('metadata', metadata);
    console.log('call', call);
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
