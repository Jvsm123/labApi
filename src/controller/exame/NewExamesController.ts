import { Request, Response } from 'express';

import { NewExamesService } from '../../service/exame/NewExamesService';

export class NewExamesController
{
	async handler( req: Request, res: Response )
	{
		const newExamesService = new NewExamesService();

		const result = await newExamesService.execute( req.body );

		return res.json( result );
	};
};
