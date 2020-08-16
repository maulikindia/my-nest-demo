import { PipeTransform, ArgumentMetadata, BadRequestException } from "@nestjs/common";

export class SearchValidation implements PipeTransform {

    readonly myArr = ['jsdhsd', 'sdsd', 'sdsdsd'];
    transform(value: any, metdata: ArgumentMetadata) {
        value = value.toString();
        if (!this.myArr.includes(value)) {
            throw new BadRequestException(` ${value} is not valid`);
        }
        return value;
    }

};