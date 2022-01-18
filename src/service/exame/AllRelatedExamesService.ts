import { getCustomRepository } from 'typeorm';

import { ExameRepository } from '../../repositories/examesRepository';

export class AllRelatedExamesService
{
	async execute( ID: string ): Promise<any>
	{
		const exameRepo = getCustomRepository( ExameRepository );

		const related = await exameRepo.find(
		{ 
			where: { nome: ID },
			relations: ["laboratorio"]
		});

		return related;
	};
};
