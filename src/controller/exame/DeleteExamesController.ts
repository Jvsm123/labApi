import { Request, Response } from 'express';

import { DeleteExamesService } from '../../service/exame/DeleteExamesService';

export class DeleteExamesController
{
	async handler( req: Request, res: Response )
	{
		const deleteExamesService = new DeleteExamesService();
		
		const result = await deleteExamesService.execute();

		return res.json( result );
	};
};
