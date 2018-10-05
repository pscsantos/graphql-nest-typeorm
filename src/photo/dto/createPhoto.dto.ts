import { Photo } from "../photo.entity";

export class CreatePhotoDto{
    //id: number= 0;
    name: string;
    description: string;
    filename: string;
    views: number;
    isPublished: boolean;

    transform(): Photo {
        return {
            name: this.name,
            description: this.description,
            filename: this.filename,
            views: this.views,
            isPublished: this.isPublished,
        } as Photo;
    }

    t
}