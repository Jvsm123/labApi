import { getCustomRepository } from 'typeorm';

import { ExameRepository } from '../../repositories/examesRepository';

export class DeleteExamesService
{
	async execute( data: any[any] ): Promise<any>
	{
		const examesRepo = getCustomRepository( ExameRepository );

		const exame = await examesRepo.findOne( data.id );

		if( exame ) await examesRepo.remove( exame );

		return "Removido com sucesso!";
	};
};
