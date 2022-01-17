export interface INewData
{
	nome: string;
	tipo: string;
};

export interface IDeleteData
{
	ID: string;
	newData: { nome: string; tipo: string; status: string; };
};
