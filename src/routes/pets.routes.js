import express from 'express';
import * as _ from '../controllers/pets.controller';

const petsRouter = express.Router();

petsRouter.get('/', _.getPets);
petsRouter.get('/:id', _.getPet);

export default petsRouter;
