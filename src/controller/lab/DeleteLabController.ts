import { Request, Response } from 'express';

import { DeleteLabService } from '../../service/lab/DeleteLabService';

export class DeleteLabController
{
	async handler( req: Request, res: Response )
	{
		const deleteLabService = new DeleteLabService();

		const ID = req.params.nome

		const result = await deleteLabService.execute( ID );

		return res.json( result );
	};
};
