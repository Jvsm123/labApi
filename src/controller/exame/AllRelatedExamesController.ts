import { Request, Response } from 'express';

import { AllRelatedExamesService } from '../../service/exame/AllRelatedExamesService';

export class AllRelatedExamesController
{
	async handler( req: Request, res: Response ): Promise<any>
	{
		const allRelatedExamesService = new AllRelatedExamesService();

		const nomeParams = req.params.nome

		if( !nomeParams ) throw new Error("Faltam informações!");

		const result = await allRelatedExamesService.execute( nomeParams );
	
		return res.json( result );
	};
};
