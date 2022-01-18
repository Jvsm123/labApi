import { getCustomRepository } from 'typeorm';

import { INewLabExames } from '../../utils/labInterfaces';

import { LabRepository } from '../../repositories/labRepository';

import { ExameRepository } from '../../repositories/examesRepository';

export class NewLabExamesService
{
	async execute( { ID, exames }: INewLabExames ): Promise<any>
	{
		let examesTargets: any[any];

		const labRepo = getCustomRepository( LabRepository );

		const exameRepo = getCustomRepository( ExameRepository );

		const lab = await labRepo.findOne({ nome: ID });

		if( !lab ) throw new Error("Não há laboratórios com esse nome!");

		const Promises = exames.map( async (i: any) =>
		{
			const exame =  await exameRepo.findOne({ nome: i })

			if( exame ) return exame;
		});

		examesTargets = await Promise.all( Promises );

		if( !examesTargets ) throw new Error("Não há Exames com esse nome!");

		lab.exames = [ ...lab.exames, ...examesTargets ];

		await labRepo.save( lab );

		return lab;
	};
};
