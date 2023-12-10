import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { GrpcClientService } from './grpc-client.service';
import { ClientGrpc } from '@nestjs/microservices';
import { Metadata } from '@grpc/grpc-js';

interface HeroById {
  id: number;
}
interface Hero {
  id: number;
  name: string;
}
interface HeroesService {
  findOne: (heroById: HeroById, metadata: Metadata) => Hero;
}

@Controller()
export class GrpcClientController implements OnModuleInit {
  private heroesService: HeroesService;
  constructor(
    private readonly grpcClientService: GrpcClientService,
    @Inject('HERO_SERVICE') private client: ClientGrpc,
  ) {}
  onModuleInit() {
    this.heroesService = this.client.getService<HeroesService>('HeroesService');
  }
  @Get()
  getHero(): Hero {
    // 第二个参数可以传递元数据
    const metadata = new Metadata();
    metadata.add('Set-Cookie', 'yummy_cookie=choco');
    return this.heroesService.findOne({ id: 1 }, metadata);
  }
}
