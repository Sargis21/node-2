import {NextFunction, Request, Response} from "express";
import BaseError from "./BaseError";
import logger from '../services/log/WinstonLog';

export function logError (err: BaseError) {
    logger.error(err);
}

export function logErrorMiddleware (err: BaseError, req: Request, res: Request, next: NextFunction) {
    logError(err)
    next(err)
}

export function returnError (err: BaseError, req: Request, res: Response, next: NextFunction) {
    logError(err);
    res.status(err.statusCode || 503).json({ message: err.message })
}

export function isOperationalError(error: Error) {
    if (error instanceof BaseError) {
        return error.isOperational
    }
    return false
}