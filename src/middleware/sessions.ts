import { Request, Response } from 'express';

function sessionValidation(request: Request, response: Response, next: Function) {
    console.log(request)
    next()
}