import { Logger, NotFoundException } from "@nestjs/common"
const logger = new Logger('HandlerExceptionError');
export const handlerExceptionError = (error)=>{
    logger.error(error);
    if(error.code === '23503')
        throw new NotFoundException(error.detail);

    if(error.response.statusCode === 404)
        throw new NotFoundException(error.response.message);

    throw new Error(error.detail);
}