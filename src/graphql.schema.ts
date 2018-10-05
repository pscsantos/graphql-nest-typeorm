export class CreatePhotoInput {
    name?: string;
    description?: string;
    filename?: string;
    views?: number;
    isPublished?: boolean;
}

export abstract class IMutation {
    abstract createPhoto(createPhotoInput?: CreatePhotoInput): Photo | Promise<Photo>;
}

export class Photo {
    id?: string;
    name?: string;
    description?: string;
    filename?: string;
    views?: number;
    isPublished?: boolean;
}

export abstract class IQuery {
    abstract Photo(id: number): Photo | Promise<Photo>;

    abstract allPhotos(): Photo[] | Promise<Photo[]>;

    abstract temp__(): boolean | Promise<boolean>;
}

export abstract class ISubscription {
    abstract photoCreated(): Photo | Promise<Photo>;
}
