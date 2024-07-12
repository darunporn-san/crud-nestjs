import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Blogs, BlogDocument } from './schemas/blogs.schema';
import { Model } from 'mongoose';

import { PostsService } from 'src/posts/posts.service';
@Injectable()
export class BlogsService {
  constructor(
    @InjectModel(Blogs.name) private blogModel: Model<BlogDocument>,
    private postsService: PostsService
  ) {}

  async create(createBlogDto: CreateBlogDto): Promise<Blogs> {
    const postResult = await this.postsService.findOne(createBlogDto.postId)
    if(!postResult){
      throw new NotFoundException('Post not found')
    }
    const result = new this.blogModel(createBlogDto);
    return result.save();
  }

  async findOne(id: string): Promise<Blogs> {
    const result = await this.blogModel.findById(id).populate('postId').exec();
    return result;
  }
}
