import { Request, Response } from 'express';

import { NewLabExamesService } from '../../service/lab/NewLabExamesService';

export class NewLabExamesController
{
	async handler( req: Request, res: Response ): Promise<any>
	{
		const newLabExamesService = new NewLabExamesService();

		const nameParams = req.params.nome;

		const bodyExames = req.body;

		if( !nameParams || !bodyExames )
			throw new Error("Impossível fazer associação, faltam dados!");

		const result = await newLabExamesService
			.execute({ ID: nameParams, exames: bodyExames });

		return res.json( result );
	};
};
