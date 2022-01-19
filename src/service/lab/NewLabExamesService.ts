import { getCustomRepository, IsNull } from 'typeorm';

import { INewLabExames } from '../../utils/labInterfaces';

import { Exame } from '../../database/entity/exame';

import { Laboratorio } from '../../database/entity/laboratorio';

import { LabRepository } from '../../repositories/labRepository';

import { ExameRepository } from '../../repositories/examesRepository';

export class NewLabExamesService
{
	async execute( { ID, exames }: INewLabExames ): Promise< Laboratorio >
	{
		let examesTargets: Exame[] ;

		const labRepo: LabRepository = getCustomRepository( LabRepository );

		const exameRepo: ExameRepository = getCustomRepository( ExameRepository );

		const lab: Laboratorio | undefined = await labRepo.findOne(
		{ 
			where: { nome: ID },
			relations: ["exames"]
		});

		if( !lab ) throw new Error("Não há laboratórios com esse nome!");

		const Promises: Iterable< Promise<(Exame)> > = exames.map( async (i: string) =>
		{
			const exame: any = await exameRepo.findOne({ nome: i })

			if( exame ) return exame;
		});

		examesTargets = await Promise.all( Promises );

		if( !examesTargets ) throw new Error("Não há Exames com esse nome!");

		if ( lab.exames.length >= 1 )
			lab.exames = [ ...lab.exames, ...examesTargets ];

		else lab.exames = [...examesTargets];

		await labRepo.save( lab );

		return lab;
	};
};
