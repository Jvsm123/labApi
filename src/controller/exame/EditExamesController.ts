import { Request, Response } from 'express';

import { EditExamesService } from '../../service/exame/EditExamesService';

export class EditExamesController
{
	async handler( req: Request, res: Response )
	{
		const editExamesService = new EditExamesService();

		const querys = req.params;

		// result = await editExamesService.execute(  );

		// return res.json( result );
	};
};
