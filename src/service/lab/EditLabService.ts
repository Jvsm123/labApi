import { getCustomRepository } from 'typeorm';

import { Laboratorio } from '../../database/entity/laboratorio';

import { LabRepository } from '../../repositories/labRepository';

import { IServiceUpdateData } from '../../utils/labInterfaces';

export class EditLabService
{
	async execute( { ID, newData, status }: IServiceUpdateData ): Promise< string | Laboratorio >
	{
		const labRepo: LabRepository = getCustomRepository( LabRepository );

		let oldLab: Laboratorio | undefined = await labRepo.findOne({ nome: ID });

		if( oldLab )
		{
			newData.nome && ( oldLab.nome = newData.nome );
			newData.endereco && ( oldLab.endereco = newData.endereco );
			oldLab.status = ( Number(status) === 0 ) ? "Ativo" : "Inativo"
		}
		else return "Laboratório não encontrado!";

		await labRepo.save( oldLab );

		return oldLab;
	};
};
