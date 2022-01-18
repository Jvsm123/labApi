import { getCustomRepository } from 'typeorm';

import { LabRepository }  from '../../repositories/labRepository';

export class AllLabService
{
	async execute(): Promise<any>
	{
		const labRepo = getCustomRepository( LabRepository );

		const allLab = labRepo.find({ relations: ["exames"] });

		return allLab;
	};
};
