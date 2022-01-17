import Express from 'express';

import "express-async-errors"; 

import "reflect-metadata";

import './database';

import { labs } from './routes/labs';
import { exame } from './routes/exame';

const api = Express();

//===== Configurações =====//

	api.use( Express.urlencoded({ extended: true }) );
	api.use( Express.json() );

//===== Rotas =====//

	api.use( '/lab', labs );
	api.use( '/exame', exame );

api.listen( 8080, () => console.log(" >>> LISTENING <<< ") );
