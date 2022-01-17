import { INewData } from '../../utils/exameInterfaces';

import { getCustomRepository } from 'typeorm';

import { ExameRepository } from '../../repositories/examesRepository';

export class NewExamesService
{
	async execute( data: INewData ): Promise<any>
	{
		const examesRepo = getCustomRepository( ExameRepository );

		const alreadyCreated = await examesRepo.findOne( data.nome );

		if( alreadyCreated ) throw new Error("Exame já criado!");

		const newExame =
		{
			nome: data.nome,
			tipo: data.tipo,
			status: "Ativo"
		};

		await examesRepo.save( newExame );

		return newExame;
	};
};
