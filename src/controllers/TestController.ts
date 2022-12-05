import {NextFunction, Request, Response} from "express";
import User from "../models/User";
import BaseError from "../exceptions/BaseError";

class TestController
{
    /**
     * Get All Users
     * @param req
     * @param res
     * @param next
     */
    public async index(req: Request, res: Response, next: NextFunction)
    {
        try {
            throw new BaseError(400, 'Bad request', req.originalUrl,)
            const users = await User.findAll();
            return res.json(users);
        } catch (err) {
            next(err)
        }
    }

    /**
     * Create User
     * @param req
     * @param res
     * @param next
     */
    public async store(req: Request, res: Response, next: NextFunction)
    {
        try {
            const user = await User.create(req.body);
            return res.send(user);
        } catch (err) {
            next(err)
        }
    }
}

export default new TestController();