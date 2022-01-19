import { getCustomRepository } from 'typeorm';

import { Exame } from '../../database/entity/exame';

import { ExameRepository } from '../../repositories/examesRepository';

export class DeleteExamesService
{
	async execute( ID: string ): Promise< string >
	{
		const examesRepo: ExameRepository = getCustomRepository( ExameRepository );

		const exame: Exame | undefined = await examesRepo.findOne({ nome: ID });

		if( exame ) await examesRepo.remove( exame );

		else return "Não há exames com esse nome";

		return "Removido com sucesso!";
	};
};
