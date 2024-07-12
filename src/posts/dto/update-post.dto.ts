import { IsString,IsNumber,IsOptional } from "class-validator";


export class UpdatePostDto {
    @IsString()
    @IsOptional()
    readonly title?: String;

    @IsString()
    @IsOptional()
    readonly desc?: String;
}
