import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type BlogDocument = Blogs & Document;

@Schema()
export class Blogs {
  @Prop({ type: Types.ObjectId, required: true, ref: 'Posts' })
  postId: Types.ObjectId; //Reference to Posts model
  
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  desc: string;

  @Prop()
  tag: string;
}

export const BlogsSchema = SchemaFactory.createForClass(Blogs);
