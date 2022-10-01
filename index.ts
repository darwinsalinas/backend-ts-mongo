import express, { Express, Request, Response, NextFunction } from 'express';

const app = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({ 'message': 'hola mundo' });
});

app.get('/hola', (req, res, next) => {
    res.json({ 'message': 'hola' });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});