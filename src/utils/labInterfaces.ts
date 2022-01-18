export interface INewData
{
	nome: string;
	endereco: string;
	status?: string;
};

export interface IUpdateData
{
	ID: string;
	newData:
	{
		nome?: string;
		endereco?: string;
		status?: string;
	};
};

export interface INewLabExames
{
	ID: string;
	exames: [string];
};
