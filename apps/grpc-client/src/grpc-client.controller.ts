import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { GrpcClientService } from './grpc-client.service';
import { ClientGrpc } from '@nestjs/microservices';
import { Metadata } from '@grpc/grpc-js';
// import * as grpc from '@grpc/grpc-js';
// import * as protoLoader from '@grpc/proto-loader';
// import { join } from 'path';
// import HeroesService from './proto/hero.proto';
// console.log(HeroesService);

// 加载.proto文件
// const packageDefinition = protoLoader.loadSync(
//   join(__dirname, '/proto/hero.proto'),
// );
// const grpcObject = grpc.loadPackageDefinition(packageDefinition);
// const { HeroesService } = grpcObject.hero;
// console.log('grpcObject', grpcObject);

@Controller()
export class GrpcClientController implements OnModuleInit {
  private heroesService;
  constructor(
    private readonly grpcClientService: GrpcClientService,
    @Inject('HERO_SERVICE') private client: ClientGrpc,
  ) {}
  onModuleInit() {
    this.heroesService = this.client.getService('HeroesService');
  }
  @Get()
  getHero(): string {
    // 第二个参数可以传递元数据
    const metadata = new Metadata();
    metadata.add('Set-Cookie', 'yummy_cookie=choco');
    return this.heroesService.findOne({ id: 1 }, metadata);
  }
}
