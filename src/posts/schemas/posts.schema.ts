import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostsDocument = Posts & Document;

@Schema()
export class Posts {
    
  @Prop({ required: true })
  title: string;

  @Prop()
  desc: string;


}

export const PostsSchema = SchemaFactory.createForClass(Posts);