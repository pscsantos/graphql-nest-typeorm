import { Module } from '@nestjs/common';
import { PhotoService } from "./photo.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './photo.entity';
import { PhotoResolver } from './photo.resolvers';

@Module({
    imports: [
        TypeOrmModule.forFeature([Photo]),
    ],
    providers: [PhotoService,PhotoResolver],
    exports: [PhotoService],
})
export class PhotoModule {
}
