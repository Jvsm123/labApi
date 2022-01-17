import { INewData } from "../../utils/labInterfaces";

import { getCustomRepository } from 'typeorm';

import { LabRepository } from '../../repositories/labRepository';

export class NewLabService
{
	async execute( data: INewData ): Promise<any>
	{
		const labRepo = getCustomRepository( LabRepository );

		const alreadyCreated = await labRepo.findOne( data.nome );

		if( alreadyCreated ) throw new Error(" Já Existe! ");

		const newLab = labRepo.create( data );

		await labRepo.save( newLab );

		return labRepo;
	};
};
