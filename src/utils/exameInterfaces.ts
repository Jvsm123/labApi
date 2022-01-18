export interface INewData
{
	nome: string;
	tipo: string;
};

export interface IUpdateData
{
	ID: string;
	newData:
	{
		nome: string;
		tipo: string;
		status: string;
	};
};
