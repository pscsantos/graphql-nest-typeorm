import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { PhotoModule } from './photo/photo.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { PhotoService } from './photo/photo.service';

@Module({
  imports: [TypeOrmModule.forRoot(), 
    PhotoModule,
    GraphQLModule.forRoot({
    typePaths: ['./**/**/*.graphql'],
    installSubscriptionHandlers: true,
    definitions: {
      path: join(process.cwd(), 'src/graphql.schema.ts'),
      outputAs: 'class',
    },
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
