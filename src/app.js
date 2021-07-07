import morgan from 'morgan';
import helmet from 'helmet';
import express from 'express';
import cookieParser from 'cookie-parser';
// routes
import indexRouter from './routes';

const app = express();

// attach utilities to application
app.use(morgan('tiny'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/v1', indexRouter);

export default app;
