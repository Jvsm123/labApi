import dotenv from 'dotenv';

dotenv.config();

process.env.TYPEORM_URL = process.env['DATABASE_URL'];

import * as SwaggerDoc from './swagger.json';

import swaggerUI from 'swagger-ui-express';

import morgan from 'morgan';

import Express from 'express';

import "express-async-errors"; 

import "reflect-metadata";

import './database';

import { labs } from './routes/labs';

import { exame } from './routes/exames';

const api = Express();

//===== Configurações =====//

	api.use( Express.urlencoded({ extended: true }) );
	api.use( Express.json() );
	api.use( morgan('tiny') );
	api.use( 
		"/docs",
		swaggerUI.serve,
		swaggerUI.setup( SwaggerDoc,
		{
			explorer: true,
			swaggerOptions:
			{
				url: "/swagger.json"
			}
		})
	);

//===== Rotas =====//

	api.use( '/lab', labs );
	api.use( '/exame', exame );

api.listen( 8080, () => console.log(" >>> LISTENING <<< ") );
