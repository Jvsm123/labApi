import { getCustomRepository } from 'typeorm'

import { ExameRepository } from '../../repositories/examesRepository';

export class AllExamesService
{
	async execute(): Promise<any>
	{
		const exameRepo = getCustomRepository( ExameRepository );

		const exames = await exameRepo.find();

		return exames;
	};
};
