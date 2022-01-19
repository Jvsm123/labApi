import { getCustomRepository } from 'typeorm'

import { Exame } from '../../database/entity/exame';

import { ExameRepository } from '../../repositories/examesRepository';

export class AllExamesService
{
	async execute(): Promise< Exame[] >
	{
		const exameRepo: ExameRepository = getCustomRepository( ExameRepository );

		const exames: Exame[] = await exameRepo.find();

		return exames;
	};
};
