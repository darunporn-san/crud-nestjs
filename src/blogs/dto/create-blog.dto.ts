import { IsString,IsNumber,IsOptional, IsNotEmpty, IsMongoId } from "class-validator";

export class CreateBlogDto {
    @IsNotEmpty()
    @IsMongoId()
    readonly postId: string;

    @IsString()
    readonly title: string;

    @IsString()
    readonly desc: string;
    
    @IsString()
    readonly tag: string;
}
