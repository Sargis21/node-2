import {HttpMessageStatus} from "../enums/HttpStatusCodes";


class BaseError extends Error {
    public statusCode: number;
    public isOperational: boolean;
    constructor (statusCode: number, description?: string, name?: string, isOperational?: boolean, ) {
        super(description || HttpMessageStatus(statusCode))

        Object.setPrototypeOf(this, new.target.prototype)
        this.name = name || 'Error'
        this.statusCode = statusCode || 500
        this.isOperational = isOperational || true
        Error.captureStackTrace(this)
    }
}

export default BaseError