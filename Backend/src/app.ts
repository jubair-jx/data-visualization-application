import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cookieParser());

app.use(cors());

// application routes
app.use('/api', router);

app.get('/', (req, res) => {
  res.status(200).send({
    success: true,
    message: 'Server is runnning...',
  });
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
