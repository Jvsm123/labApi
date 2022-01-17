import { Request, Response } from 'express';

import { EditExamesService } from '../../service/exame/EditExamesService';

export class EditExamesController
{
	async handler( req: Request, res: Response )
	{
		const editExamesController = new EditExamesService();

		const result = await editExamesController.execute();

		return res.json( result );
	};
};
