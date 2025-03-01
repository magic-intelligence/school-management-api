import { BadRequestException } from "@nestjs/common"

export const handlerExceptionRepository = (error)=>{
    throw new BadRequestException(error.detail);
}