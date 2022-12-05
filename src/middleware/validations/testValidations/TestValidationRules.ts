import {body, validationResult} from "express-validator";
import User from "../../../models/User";
import { ValidationErrors } from "./ValidationResult";

const rules = [
    body('email').isEmail().custom(value => {
        return User.count({
            where: {email: value}
        }).then(exists => {
            if (exists > 0) {
                return Promise.reject('Email already taken')
            }
        })
    }),

    body('password').notEmpty().withMessage('Not empty'),
    body('password').isLength({min: 6}).withMessage('Min: 6'),
    body('name')
        .if(body('name').exists())
        .isString()
        .withMessage('string')
        .isLength({min: 2})
        .withMessage('min: 2'),
    ValidationErrors
]

export {rules as rule}