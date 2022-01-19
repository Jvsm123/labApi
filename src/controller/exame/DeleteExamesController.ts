import { Request, Response } from 'express';

import { DeleteExamesService } from '../../service/exame/DeleteExamesService';

export class DeleteExamesController
{
	async handler( req: Request, res: Response ): Promise< Response >
	{
		const deleteExamesService: DeleteExamesService = new DeleteExamesService();

		const ID: string = req.params.nome;

		const result: string = await deleteExamesService.execute( ID );

		return res.json( result );
	};
};
