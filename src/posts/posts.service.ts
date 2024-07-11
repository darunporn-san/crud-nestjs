import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
    private readonly posts = [
        { id: 1,title:'Post1',desc:'Description 1'},
        { id: 2,title:'Post2',desc:'Description 2'}
    ]

    

    //get all posts
    findAll(){
        return this.posts
    }

    //add   new posts
    create(post){
        this.posts.push(post);
        return this.posts
    }
}
