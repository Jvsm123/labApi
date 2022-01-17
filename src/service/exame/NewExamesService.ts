import { INewData } from '../../utils/exameInterfaces';

import { getCustomRepository } from 'typeorm';

import { ExameRepository } from '../../repositories/examesRepository';

export class NewExamesService
{
	async execute( data: INewData ): Promise<any>
	{
		const examesRepo = getCustomRepository( ExameRepository );

		if( !data.nome || !data.tipo ) throw new Error("Faltam dados!");

		const alreadyCreated = await examesRepo.findOne({ nome: data.nome });

		if( alreadyCreated ) throw new Error("Exame já criado!");

		const newExame =
		{
			nome: data.nome,
			tipo: data.tipo,
			status: "Ativo"
		};

		const result = await examesRepo.save( newExame );

		return result;
	};
};
