import {
    Column,
    Entity,
    PrimaryGeneratedColumn
}
    from "typeorm";

@Entity()
export class Photo {
    
    constructor(name: string,
        description: string,
        filename: string,
        views: number,
        isPublished: boolean,
    ) {
        this.name = name;
        this.description = description;
        this.filename = filename;
        this.views = views;
        this.isPublished = isPublished;
    }
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;

    @Column('text')
    description: string;

    @Column()
    filename: string;

    @Column('int')
    views: number;

    @Column()
    isPublished: boolean;

}


