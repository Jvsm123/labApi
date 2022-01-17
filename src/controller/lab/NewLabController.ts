import { Request, Response } from 'express';

import { NewLabService } from '../../service/lab/NewLabService';

export class NewLabController
{
	async handler( req: Request, res: Response )
	{
		const newLabService = new NewLabService();

		const result = await newLabService.execute( req.body );

		return res.json( result );
	};
};
