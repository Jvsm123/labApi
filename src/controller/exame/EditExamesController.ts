import { Request, Response } from 'express';

import { EditExamesService } from '../../service/exame/EditExamesService';

export class EditExamesController
{
	async handler( req: Request, res: Response )
	{
		const editExamesService = new EditExamesService();

		const querys = req.params;

		const body = req.body;

		if( !querys ) throw new Error("Faltam informações!");

		if( !body.nome && !body.tipo && !body.status )
			throw new Error("Não há o que alterar!");

		const result = await editExamesService.execute(
		{
			ID: querys.nome,
			newData: body
		});

		return res.json( result );
	};
};
