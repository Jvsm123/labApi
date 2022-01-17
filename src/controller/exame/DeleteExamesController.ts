import { Request, Response } from 'express';

import { DeleteExamesService } from '../../service/exame/DeleteExamesService';

export class DeleteExamesController
{
	async handler( req: Request, res: Response )
	{
		const deleteExamesService = new DeleteExamesService();

		const ID = req.params.nome;

		const result = await deleteExamesService.execute( ID );

		return res.json( result );
	};
};
