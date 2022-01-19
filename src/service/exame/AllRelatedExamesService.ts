import { getCustomRepository } from 'typeorm';

import { Exame } from '../../database/entity/exame';

import { ExameRepository } from '../../repositories/examesRepository';

export class AllRelatedExamesService
{
	async execute( ID: string ): Promise< Exame[] >
	{
		const exameRepo: ExameRepository = getCustomRepository( ExameRepository );

		const related: Exame[] = await exameRepo.find(
		{ 
			where: { nome: ID },
			relations: ["laboratorio"]
		});

		return related;
	};
};
