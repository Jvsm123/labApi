import { deepEqual, ok } from 'assert';

import 'mocha';
import { NewLabService } from '../src/service/lab/NewLabService';


const LABMOCK =
{
	nome: "Rosa Cruz",
	endereco: "Rua-1234",
	status: "ativo"
};

describe('Suite de teste para laborátorios', () =>
{
	it('Deve criar laboratórios', async (): Promise<any> =>
	{
		const newLabService = new NewLabService();

		const result = await newLabService.execute( LABMOCK );

		console.log( result );

		ok( result );
	});

	it('Deve listar laboratorios', async (): Promise<any> =>
	{

	});

	it('Deve atualizar um laboratorio', async (): Promise<any> =>
	{

	});

	it('Deve remover laboratótios', async (): Promise<any> =>
	{
		
	});
});
