import { Request, Response } from 'express';

import { EditLabService } from '../../service/lab/EditLabService';

export class EditLabController
{
	async handler( req: Request, res: Response, )
	{
		const editLabService = new EditLabService();

		const params = req.params;

		const body = req.body;

		if( !params ) throw new Error("Faltam informações");

		if( !body.nome && !body.endereco && !body.status )
			throw new Error("Não há o que alterar!");

		const result = await editLabService.execute(
		{
			ID: params.nome,
			newData: body
		});

		return res.json( result );
	};
};
