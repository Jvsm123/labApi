export interface IControllerEditBodyData
{
	nome?: string;
	endereco?: string;
	exames?: Array<string>;
	status?: string;
};

export interface IControllerNewBodyData
{
	nome: string;
	endereco: string;
	exames?: Array<string>;
};

export interface IServiceNewData
{
	nome: string;
	endereco: string;
	status?: string;
};


export interface IServiceUpdateData
{
	ID: string;
	newData:
	{
		nome?: string;
		endereco?: string;
	};
	status: string;
};

export interface INewLabExames
{
	ID: string;
	exames: [string];
};
