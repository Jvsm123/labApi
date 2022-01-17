import { Request, Response } from 'express';

import { AllRelatedExamesService } from '../../service/exame/AllRelatedExamesService';

export class AllRelatedExamesController
{
	async handler( req: Request, res: Response ): Promise<any>
	{
		const allRelatedExamesService = new AllRelatedExamesService();

		const result = await allRelatedExamesService.execute();
	
		return res.json( result );
	};
};
