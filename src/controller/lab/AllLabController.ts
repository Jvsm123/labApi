import { Request, Response } from 'express';

import { AllLabService } from '../../service/lab/AllLabService';

export class AllLabController
{
	async handler( req: Request, res: Response )
	{
		const allLabService = new AllLabService();

		const result = await allLabService.execute();

		return res.json( result );
	};
};
