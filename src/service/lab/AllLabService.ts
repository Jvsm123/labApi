import { getCustomRepository } from 'typeorm';

import { Laboratorio } from '../../database/entity/laboratorio';

import { LabRepository }  from '../../repositories/labRepository';

export class AllLabService
{
	async execute(): Promise< Laboratorio[] >
	{
		const labRepo: LabRepository = getCustomRepository( LabRepository );

		const allLab: Laboratorio[] = await labRepo.find({ relations: ["exames"] });

		return allLab;
	};
};
