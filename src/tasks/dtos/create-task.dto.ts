import { IsNotEmpty } from 'class-validator';

export class CreateDto {

    //IsNotEmpty decorater to add validation for empty value for title
    @IsNotEmpty()
    readonly title: string;

    @IsNotEmpty()
    readonly desc: string;
}