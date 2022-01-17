import { Request, Response } from 'express';

import { EditLabService } from '../../service/lab/EditLabService';

export class EditLabController
{
	async handler( req: Request, res: Response )
	{
		const editLabService = new EditLabService();

		const result = await editLabService.execute();

		return res.json( result );
	};
};
