import { IDeleteData } from '../../utils/labInterfaces';

import { getCustomRepository } from 'typeorm';

import { LabRepository } from '../../repositories/labRepository';

export class EditLabService
{
	async execute( { ID, newData }: IDeleteData ): Promise<any>
	{
		const labRepo = getCustomRepository( LabRepository );

		let oldLab = await labRepo.findOne({ nome: ID });

		if( oldLab )
		{
			newData.nome && ( oldLab.nome = newData.nome );
			newData.status && ( oldLab.status = newData.status );
			newData.endereco && ( oldLab.endereco = newData.endereco );
		}
		else return "Exame não encontrado!";

		await labRepo.save( oldLab );

		return oldLab;
	};
};
