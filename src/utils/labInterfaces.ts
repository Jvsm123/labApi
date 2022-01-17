export interface INewData
{
	nome: string;
	endereco: string;
	status?: string;
};

export interface IDeleteData
{
	ID: string;
	newData: { nome: string; endereco: string; status: string };
}
