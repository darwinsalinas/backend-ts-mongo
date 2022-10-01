import { Router, Request, Response, NextFunction, Express } from 'express';

export const appRouter = (app: Express) => {
    // const router = Router();

    app.get('/', (req: Request, res: Response, next: NextFunction) => {
        res.json({ 'message': 'hola mundo' });
    });

    app.get('/hola', (req: Request, res: Response, next: NextFunction) => {
        res.json({ 'message': 'hola' });
    });
}