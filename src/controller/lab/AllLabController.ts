import { Request, Response } from 'express';

import { AllLabService } from '../../service/lab/AllLabService';

export class AllLabController
{
	async handler( req: Request, res: Response ): Promise< Response >
	{
		const allLabService: AllLabService = new AllLabService();

		const result: Array<Object> = await allLabService.execute();

		return res.json( result );
	};
};
