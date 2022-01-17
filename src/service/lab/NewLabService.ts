import { INewData } from "../../utils/labInterfaces";

import { getCustomRepository } from 'typeorm';

import { LabRepository } from '../../repositories/labRepository';

export class NewLabService
{
	async execute( data: INewData ): Promise<any>
	{
		const labRepo = getCustomRepository( LabRepository );

		if( !data.nome || !data.endereco ) throw new Error("Faltam dados!");

		const alreadyCreated = await labRepo.findOne(
		{
			nome: data.nome,
			endereco: data.endereco
		});

		if( alreadyCreated ) throw new Error("Laboratório Já Existe!");

		const newLab =
		{
			nome: data.nome,
			endereco: data.endereco,
		};

		await labRepo.save( newLab );

		return newLab;
	};
};
