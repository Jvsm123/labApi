import { Router } from 'express';

import { AllLabController } from '../controller/lab/AllLabController';
import { NewLabController } from '../controller/lab/NewLabController';
import { EditLabController } from '../controller/lab/EditLabController';
import { DeleteLabController } from '../controller/lab/DeleteLabController';
import { NewLabExamesController } from '../controller/lab/NewLabExamesController';

const allLabController = new AllLabController();
const newLabController = new NewLabController();
const editLabController = new EditLabController();
const deleteLabController = new DeleteLabController();
const newLabExamesController = new NewLabExamesController();

export const labs = Router();

labs.get( '/all', allLabController.handler );

labs.post( '/add', newLabController.handler );

labs.post( '/add/:nome/exames', newLabExamesController.handler );

labs.patch( '/edit/:nome/:status', editLabController.handler );

labs.delete( '/delete/:nome', deleteLabController.handler );
