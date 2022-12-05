import {NextFunction, Request, Response} from "express";
import Log from "../models/Log";

class LogController
{
    /**
     * Get All Logs
     * @param req
     * @param res
     * @param next
     */
    public async index(req: Request, res: Response, next: NextFunction)
    {
        try {
            const logs = await Log.findAll();
            return res.json(logs);
        } catch (err) {
            next(err)
        }
    }

    /**
     * Create Log
     * @param req
     * @param res
     * @param next
     */
    public async store(req: Request, res: Response, next: NextFunction)
    {
        try {
            await Log.create({log: req.body})
        } catch (err) {
            next(err)
        }
    }
}

export default new LogController();