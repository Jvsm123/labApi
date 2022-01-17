import { IDeleteData } from '../../utils/exameInterfaces';

import { getCustomRepository } from 'typeorm';

import { ExameRepository } from '../../repositories/examesRepository';

export class EditExamesService
{
	async execute( { ID, newData }: IDeleteData ): Promise<any>
	{
		const examesRepo = getCustomRepository( ExameRepository );

		if( !ID ) throw new Error("Não há um identificador valido!");

		if( !newData || !newData.hasOwnProperty ) throw new Error("Não há novos dados!");

		let oldData = await examesRepo.findOne( ID );

		// if( oldData )
		// {
		//     oldData.nome = newData.nome;
		//     oldData.tipo = newData.tipo;
		//     oldData.status = newData.status;
		// }
		// else return "Exame não econtrado!";

		return "Exame Editado!";
	};
};
