import { Request, Response } from 'express';

function sessionValidation(request: Request, response: Response, next: Function) {
    console.log("session in sessionValidation - ", request.session)

    if (request.isAuthenticated()) {
        console.log("is authenticated")
        next();
    } else {
        console.log("is not authenticated")
        response.status(401).json({message: "Not authorized"});
    }
};

export default sessionValidation;