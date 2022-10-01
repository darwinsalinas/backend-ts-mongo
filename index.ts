import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';

const app = express();

app.get('/', (req, res, next) => {
    console.log('Codigo Poque sos tan bonito, poque , poque, poque');
    res.json({ 'message': 'hola mundo' });
});



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});