import express, { Express } from 'express';

import { appRouter } from './router';

const app: Express = express();

appRouter(app);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});