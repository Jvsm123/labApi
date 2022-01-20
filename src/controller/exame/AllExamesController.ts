import { Request, Response } from 'express';

import { AllExamesService } from '../../service/exame/AllExamesService';

export class AllExamesController
{
	async handler( req: Request, res: Response ): Promise< Response >
	{
		const allExamesService: AllExamesService = new AllExamesService();

		const result: Array<any> = await allExamesService.execute();

		return res.json( result );
	};
};
