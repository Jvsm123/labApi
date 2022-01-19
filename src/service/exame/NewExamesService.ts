import { getCustomRepository } from 'typeorm';

import { Exame } from '../../database/entity/exame';

import { IServiceNewData } from '../../utils/exameInterfaces';

import { ExameRepository } from '../../repositories/examesRepository';

export class NewExamesService
{
	async execute( data: IServiceNewData ): Promise<any>
	{
		const examesRepo: ExameRepository = getCustomRepository( ExameRepository );

		if( !data.nome || !data.tipo ) throw new Error("Faltam dados!");

		const alreadyCreated: Exame | undefined = await examesRepo.findOne({ nome: data.nome });

		if( alreadyCreated ) throw new Error("Exame já criado!");

		const newExame: Object =
		{
			nome: data.nome,
			tipo: data.tipo,
			status: "Ativo"
		};

		await examesRepo.save( newExame );

		return newExame;
	};
};
