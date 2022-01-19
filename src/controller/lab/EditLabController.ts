import { Request, Response } from 'express';

import { EditLabService } from '../../service/lab/EditLabService';

import { IControllerEditBodyData } from '../../utils/labInterfaces';

export class EditLabController
{
	async handler( req: Request, res: Response ): Promise< Response >
	{
		const editLabService: EditLabService = new EditLabService();

		const nomeParams: string = req.params.nome;

		const statusParams: string = req.params.status;

		const editBody: IControllerEditBodyData = req.body;

		if( !nomeParams || !statusParams )
			throw new Error("Faltam informações");

		if( !editBody.nome && !editBody.endereco )
			throw new Error("Não há o que alterar!");

		const result: Object | string = await editLabService.execute(
		{
			ID: nomeParams,
			newData: editBody,
			status: statusParams
		});

		return res.json( result );
	};
};
