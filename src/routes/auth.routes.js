import express from 'express';
import { getToken } from '../controllers';

const authRouter = express.Router();

authRouter.post('/', getToken);

export default authRouter;
