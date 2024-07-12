import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Posts, PostsDocument } from './schemas/posts.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Posts.name) private postsModel: Model<PostsDocument>,
  ) {}

  async create(createPostDto: CreatePostDto): Promise<Posts> {
    const result = new this.postsModel(createPostDto);
    return result.save();
  }

  async findAll(): Promise<Posts[]> {
    return this.postsModel.find().exec();
  }

  async findOne(id: string): Promise<Posts> {
    return this.postsModel.findById(id).exec();
  }

  async update(id: string, updatePostDto: UpdatePostDto): Promise<Posts> {
    const result = this.postsModel
      .findByIdAndUpdate(id, updatePostDto, { new: true })
      .exec();
    return result;
  }

  async remove(id: string) {
    try {
      const result = await this.postsModel.findByIdAndDelete(id).exec();
      if (!result) {
        throw new NotFoundException('id not found');
      }
      return { message: 'Delete Successfull' };
    } catch (error) {
      throw error;
    }
  }
}
