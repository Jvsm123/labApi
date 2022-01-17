import { Router } from 'express';

import { AllLabController } from '../controller/lab/AllLabController';
import { NewLabController } from '../controller/lab/NewLabController';
import { EditLabController } from '../controller/lab/EditLabController';
import { DeleteLabController } from '../controller/lab/DeleteLabController';

const allLabController = new AllLabController();
const newLabController = new NewLabController();
const editLabController = new EditLabController();
const deleteLabController = new DeleteLabController();

export const labs = Router();

labs.get( '/labs', allLabController.handler );

labs.post( '/add', newLabController.handler );

labs.patch( '/edit/:nome', editLabController.handler );

labs.delete( '/delete/:nome', deleteLabController.handler );
