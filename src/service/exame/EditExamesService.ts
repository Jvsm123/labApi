import { getCustomRepository } from 'typeorm';

import { Exame } from '../../database/entity/exame';

import { ExameRepository } from '../../repositories/examesRepository';

import { IServiceUpdateData } from '../../utils/exameInterfaces';

export class EditExamesService
{
	async execute( { ID, newData, status }: IServiceUpdateData ): Promise< string | Exame >
	{
		const examesRepo: ExameRepository = getCustomRepository( ExameRepository );

		let oldExame: Exame | undefined = await examesRepo.findOne({ nome: ID });

		if( oldExame )
		{
			newData.nome && ( oldExame.nome = newData.nome );
			newData.tipo && ( oldExame.tipo = newData.tipo );
			oldExame.status = ( Number(status) === 0 ) ? "Ativo" : "Inativo";
		}
		else return "Exame não econtrado!";

		await examesRepo.save( oldExame );

		return oldExame;
	};
};
