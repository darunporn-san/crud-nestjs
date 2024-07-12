import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './posts/posts.module';
import { BlogsModule } from './blogs/blogs.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://root:example@localhost:27017/nestjs-mongo?authSource=admin'), PostsModule, BlogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
