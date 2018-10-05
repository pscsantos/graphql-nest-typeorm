import { Injectable } from '@nestjs/common';
import { Photo } from "./photo.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';

@Injectable()
export class PhotoService {
    constructor(
        @InjectRepository(Photo)
        private readonly photoRepository: Repository<Photo>,
    ) { }

    async findAll(): Promise<Photo[]> {
        return await this.photoRepository.find();
    }

    async save(photo: Photo): Promise<Photo> {
        console.log('acessou service photo');
        console.log(photo);
        return await this.photoRepository.save(photo)
    }

}