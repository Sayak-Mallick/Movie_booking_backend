import express, { Application, NextFunction, Request, Response } from 'express';

const app: Application = express();
app.use(express.json());
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase';

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({
    status: 200,
    message: 'Server is running!'
  });
});

export default app;
