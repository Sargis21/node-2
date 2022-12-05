import {HttpMessageStatus, HttpStatusCodes} from "../enums/HttpStatusCodes";
import BaseError from "./BaseError";

class AppError extends BaseError {
    constructor (
        name: string,
        statusCode = HttpStatusCodes.NOT_FOUND,
        description = 'Not found.',
        isOperational = true
    ) {
        console.log(HttpMessageStatus)
        super(statusCode, description, name, isOperational)
    }
}

export default AppError