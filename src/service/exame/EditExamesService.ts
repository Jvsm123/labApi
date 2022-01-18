import { IUpdateData } from '../../utils/exameInterfaces';

import { getCustomRepository } from 'typeorm';

import { ExameRepository } from '../../repositories/examesRepository';

export class EditExamesService
{
	async execute( { ID, newData }: IUpdateData ): Promise<any>
	{
		const examesRepo = getCustomRepository( ExameRepository );

		let oldExame = await examesRepo.findOne({ nome: ID });

		if( oldExame )
		{
			newData.nome && ( oldExame.nome = newData.nome );
			newData.tipo && ( oldExame.tipo = newData.tipo );
			newData.status && ( oldExame.status = newData.status );
		}
		else return "Exame não econtrado!";

		await examesRepo.save( oldExame );

		return oldExame;
	};
};
