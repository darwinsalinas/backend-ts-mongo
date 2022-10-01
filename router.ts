import { Router, Request, Response, NextFunction, Express } from 'express';
import controller from './controller';

export const appRouter = (app: Express) => {
    // const router = Router();

    app.get('/', async (req: Request, res: Response, next: NextFunction) => {
        const response = await controller.root();

        res.json(response);
    });

    app.get('/hola', async (req: Request, res: Response, next: NextFunction) => {
        const response = await controller.greetings();

        res.json(response);
    });


    app.get('/products', async (req: Request, res: Response) => {
        try {
            const response = await controller.getProducts();

            res.json(response);
        } catch (error) {
            res.json({ message: 'Whoops something went wrong' })
        }
    });

    app.get('/products/:id', async (req: Request, res: Response) => {
        const { id } = req.params;

        const response = await controller.getProduct(Number(id));
        console.log(response);


        res.json(response);
    })
}