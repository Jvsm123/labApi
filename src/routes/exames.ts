import { Router } from 'express';

import { AllExamesController } from '../controller/exame/AllExamesController';
import { NewExamesController } from '../controller/exame/NewExamesController';
import { EditExamesController } from '../controller/exame/EditExamesController';
import { DeleteExamesController } from '../controller/exame/DeleteExamesController';

const allExamesController = new AllExamesController();
const newExamesController = new NewExamesController();
const editExamesController = new EditExamesController();
const deleteExamesController = new DeleteExamesController();

export const exame = Router();

exame.get( '/exames', allExamesController.handler );

exame.post( '/add', newExamesController.handler );

exame.patch( '/edit/:nome', editExamesController.handler );

exame.delete( '/delete/:nome', deleteExamesController.handler );
