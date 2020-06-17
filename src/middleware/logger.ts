import { Request, Response } from 'express';

function logger(request: Request, response: Response, next: Function) {
    console.log("----------------");
    console.log("request - ", request.session);
    console.log("----------------");
    next();
}


export default logger;