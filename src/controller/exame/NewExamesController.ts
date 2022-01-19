import { Request, Response } from 'express';

import { NewExamesService } from '../../service/exame/NewExamesService';

export class NewExamesController
{
	async handler( req: Request, res: Response ): Promise< Response >
	{
		const newExamesService: NewExamesService = new NewExamesService();

		const result: Object = await newExamesService.execute( req.body );

		return res.json( result );
	};
};
