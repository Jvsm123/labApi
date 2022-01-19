import { Request, Response } from 'express';

import { NewLabExamesService } from '../../service/lab/NewLabExamesService';

export class NewLabExamesController
{
	async handler( req: Request, res: Response ): Promise< Response >
	{
		const newLabExamesService: NewLabExamesService = new NewLabExamesService();

		const nameParams: string = req.params.nome;

		const bodyExames: [string] = req.body;

		if( !nameParams || !bodyExames || bodyExames.length < 1 )
			throw new Error("Impossível fazer associação, faltam dados!");

		const result: Object = await newLabExamesService
			.execute({ ID: nameParams, exames: bodyExames });

		return res.json( result );
	};
};
