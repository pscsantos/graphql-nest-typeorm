import { PhotoService } from "./photo.service";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { Photo } from "./photo.entity";
import { CreatePhotoDto } from "./dto/createPhoto.dto";

@Resolver('Photo')
export class PhotoResolver{

    constructor(
        private readonly photoService: PhotoService,

    ){}
    
    @Query('allPhotos')
    async allPhotos(){   
        return await this.photoService.findAll();     
    }

    @Mutation('createPhoto')
    async createPhoto(@Args('createPhotoInput') args: CreatePhotoDto): Promise<Photo>{
        console.log('acessou createPhoto');
        console.log(args);
        
        const photo = new Photo(args.name,
                                args.description,
                                args.filename,
                                args.views,
                                args.isPublished);
        
        console.log(photo);        
    
        //const photo = args.transform();        

        return await this.photoService.save(photo);
    }
     

}