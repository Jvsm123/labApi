import { Request, Response } from 'express';

import { AllExamesService } from '../../service/exame/AllExamesService';

export class AllExamesController
{
	async handler( req: Request, res: Response )
	{
		const allExamesService = new AllExamesService();

		const result = await allExamesService.execute();

		return res.json( result );
	};
};
