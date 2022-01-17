import { getCustomRepository } from 'typeorm';

import { ExameRepository } from '../../repositories/examesRepository';

export class DeleteExamesService
{
	async execute( ID: string ): Promise<any>
	{
		const examesRepo = getCustomRepository( ExameRepository );

		const exame = await examesRepo.findOne({ nome: ID });

		if( exame ) await examesRepo.remove( exame );

		else return "Não há exames com esse nome";

		return "Removido com sucesso!";
	};
};
