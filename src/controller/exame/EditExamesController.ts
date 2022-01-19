import { Request, Response } from 'express';

import { EditExamesService } from '../../service/exame/EditExamesService';

import { IControllerUpdateDate } from '../../utils/exameInterfaces';

export class EditExamesController
{
	async handler( req: Request, res: Response ): Promise< Response >
	{
		const editExamesService: EditExamesService = new EditExamesService();

		const nomeParams: string = req.params.nome;

		const statusParams: string = req.params.status;

		const editBody: IControllerUpdateDate = req.body;

		if( !nomeParams || !statusParams )
			throw new Error("Faltam informações!");

		if( !editBody.nome && !editBody.tipo )
			throw new Error("Não há o que alterar!");

		const result: Object | string = await editExamesService.execute(
		{
			ID: nomeParams,
			newData: editBody,
			status: statusParams
		});

		return res.json( result );
	};
};
