import { Request, Response } from 'express';

import { DeleteLabService } from '../../service/lab/DeleteLabService';

export class DeleteLabController
{
	async handler( req: Request, res: Response )
	{
		const deleteLabService = new DeleteLabService();

		const result = await deleteLabService.execute();

		return res.json( result );
	};
};
