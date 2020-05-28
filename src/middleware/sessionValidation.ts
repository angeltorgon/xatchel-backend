import { Request, Response } from 'express';

function sessionValidation(request: Request, response: Response, next: Function) {
    console.log(process.env.SESSION_SECRET);
    next();
};

export default sessionValidation;