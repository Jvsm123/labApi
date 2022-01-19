import { getCustomRepository } from 'typeorm';

import { Laboratorio } from '../../database/entity/laboratorio';

import { LabRepository } from '../../repositories/labRepository';

export class DeleteLabService
{
	async execute( ID: string ): Promise< string >
	{
		const labRepos: LabRepository = getCustomRepository( LabRepository );

		const lab: Laboratorio | undefined = await labRepos.findOne({ nome: ID });

		if( lab ) await labRepos.remove( lab );

		else return "Não há laboratórios com esse nome";

		return "Laboratório Deleteado!";
	};
};
