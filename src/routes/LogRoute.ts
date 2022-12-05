import LogController from "../controllers/LogController";
import { Router } from "express";

class LogRoute
{
    private readonly app;

    constructor() {
        this.app = Router()
    }

    /**
     * All routes for Logs
     * @return Router
     */
   public routes(): Router {
        this.app.get('/logs', LogController.index);
        this.app.post('/log', LogController.store);

        return this.app
    }
}

export default new LogRoute()