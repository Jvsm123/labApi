import { getCustomRepository } from 'typeorm';

import { LabRepository } from '../../repositories/labRepository';

export class DeleteLabService
{
	async execute( ID: string ): Promise<any>
	{
		const LabRepos = getCustomRepository( LabRepository );

		const lab = await LabRepos.findOne({ nome: ID });

		if( lab ) await LabRepos.remove( lab );

		else return "Não há laboratórios com esse nome";

		return "Laboratório Deleteado!";
	};
};
