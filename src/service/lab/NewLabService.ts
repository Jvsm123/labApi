import { getCustomRepository } from 'typeorm';

import { Laboratorio } from '../../database/entity/laboratorio';

import { IServiceNewData } from "../../utils/labInterfaces";

import { LabRepository } from '../../repositories/labRepository';

export class NewLabService
{
	async execute( data: IServiceNewData ): Promise< Object >
	{
		const labRepo: LabRepository = getCustomRepository( LabRepository );

		if( !data.nome || !data.endereco ) throw new Error("Faltam dados!");

		const alreadyCreated: Laboratorio | undefined = await labRepo.findOne({ nome: data.nome });

		if( alreadyCreated ) throw new Error("Laboratório Já Existe!");

		const newLab: Object =
		{
			nome: data.nome,
			endereco: data.endereco,
			status: "Ativo",
		};

		await labRepo.save( newLab );

		return newLab;
	};
};
