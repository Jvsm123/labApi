export interface INewData
{
	nome: string;
	tipo: string;
};

export interface IDeleteData
{
	ID: number | string;
	newData:
	{ 
		nome?: string;
		tipo?: string;
		status: string;
	};
};
