import { Injectable, PipeTransform, ArgumentMetadata, BadRequestException } from "@nestjs/common";
import { TaskStatus } from "../tasks.model";

@Injectable()
export class StatusValidation implements PipeTransform {
    readonly statusArr = [
        TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE
    ];

    transform(value: any, metadata: ArgumentMetadata) {
        value = value.toUpperCase();
        if (!this.statusArr.includes(value)) {
            throw new BadRequestException(`Invalid status - ${value}`);
        }
        return value;
    }

}