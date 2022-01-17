import { getCustomRepository } from 'typeorm';

import { ExameRepository } from '../../repositories/examesRepository';

export class AllRelatedExamesService
{
	async execute( ID: string ): Promise<any>
	{
		const exameRepo = getCustomRepository( ExameRepository );

		const exame = await exameRepo.findOne( id: ID );

		const related = await exameRepo.find({ relations: ["laboratorio"] });

		console.log( "Relacionados: ", related );
		console.log( "Exame: ", exame );

		return exames;
	};
};
