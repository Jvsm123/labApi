import { Request, Response } from 'express';

import { NewLabService } from '../../service/lab/NewLabService';

import { IControllerNewBodyData } from '../../utils/labInterfaces';

export class NewLabController
{
	async handler( req: Request, res: Response ): Promise< Response >
	{
		const newLabService: NewLabService = new NewLabService();

		const newBody: IControllerNewBodyData = req.body;

		if( !newBody.nome || !newBody.endereco )
			throw new Error("Faltam dados!");

		const result: Object = await newLabService.execute( newBody );

		return res.json( result );
	};
};
