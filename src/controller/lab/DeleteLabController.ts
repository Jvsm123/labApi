import { Request, Response } from 'express';

import { DeleteLabService } from '../../service/lab/DeleteLabService';

export class DeleteLabController
{
	async handler( req: Request, res: Response ): Promise< Response >
	{
		const deleteLabService: DeleteLabService = new DeleteLabService();

		const ID: string = req.params.nome

		const result: string = await deleteLabService.execute( ID );

		return res.json( result );
	};
};
