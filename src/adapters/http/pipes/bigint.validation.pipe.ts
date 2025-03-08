import { BadRequestException, PipeTransform } from "@nestjs/common";

export class BigIntValidationPipe implements PipeTransform{
    transform(value: any) {
        if(!/^\d+$/.test(value)){
            throw new BadRequestException(`Value must be a positive integer (bigint format).`);
        }
        return value;
    }

}