import { Request, Response } from 'express';

function sessionValidation(request: Request, response: Response, next: Function) {
    if (request.isAuthenticated()) {
        next();
    } else {
        response.status(401).json({message: "Not authorized"});
    }
};

export default sessionValidation;