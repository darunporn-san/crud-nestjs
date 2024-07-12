import { Module } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogsController } from './blogs.controller';
import { MongooseModule } from '@nestjs/mongoose'
import { Blogs,BlogsSchema } from './schemas/blogs.schema';
import { PostsModule } from 'src/posts/posts.module';
@Module({
  imports:[MongooseModule.forFeature([{name:Blogs.name,schema:BlogsSchema}]),PostsModule],
  controllers: [BlogsController],
  providers: [BlogsService],
})
export class BlogsModule {}
