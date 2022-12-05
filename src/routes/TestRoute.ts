import TestController from "../controllers/TestController";
import { Router } from "express";
import {rule} from "../middleware/validations/testValidations/TestValidationRules";

class TestRoute
{
    private readonly app;

    constructor() {
        this.app = Router()
    }

    /**
     * All routes for Users
     * @return Router
     */
   public routes(): Router {
        this.app.get('/test', TestController.index);
        this.app.post('/test', rule, TestController.store);

        return this.app
    }
}

export default new TestRoute()