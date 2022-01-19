import { Request, Response } from 'express';

import { AllRelatedExamesService } from '../../service/exame/AllRelatedExamesService';

export class AllRelatedExamesController
{
	async handler( req: Request, res: Response ): Promise< Response >
	{
		const allRelatedExamesService: AllRelatedExamesService = new AllRelatedExamesService();

		const nomeParams: string = req.params.nome

		if( !nomeParams ) throw new Error("Faltam informações!");

		const result: Array<Object> = await allRelatedExamesService.execute( nomeParams );
	
		return res.json( result );
	};
};
