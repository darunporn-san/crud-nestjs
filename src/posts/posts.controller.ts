import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {

    constructor(private readonly postService:PostsService){}

    @Get()
    getAll(){
        return this.postService.findAll()
    }

    @Post()
    addPost(@Body() post){
        return this.postService.create(post)
    }
}
