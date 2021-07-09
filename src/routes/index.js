import express from 'express';
import { indexPage } from '../controllers';
import authRouter from './auth.routes';
import petsRouter from './pets.routes';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.use('/auth', authRouter);
indexRouter.use('/pets', petsRouter);

export default indexRouter;
