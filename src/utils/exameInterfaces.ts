export interface IControllerUpdateDate
{
	nome: string;
	tipo: string;
	status: string;
	
};

export interface IServiceNewData
{
	nome: string;
	tipo: string;
};

export interface IServiceUpdateData
{
	ID: string;
	newData:
	{
		nome?: string;
		tipo?: string;
	};
	status: string;
};
