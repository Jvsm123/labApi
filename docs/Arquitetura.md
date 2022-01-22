ARQUITETURA
===========

### Env para o Docker

Veja o arquivo ./env.development na raiz do projeto

	NODE_ENV: Define qual é o ambiente local ( dev por padrão )
	TYPEORM_CONNECTION: Define qual é o banco de dados a ser usado
	TYPEORM_URL: String da conexão
	TYPEORM_SYNCHRONIZE: sincroniza nossas entities com o banco, fazendo desnecessário migrations em ambiente DEV apenas!
	TYPEORM_LOGGING: Diz se o typeorm precisa mandar logs de cada transaction
	TYPEORM_ENTITIES: Localização de todos os arquivos de entities
	TYPEORM_MIGRATIONS: Localização de todos os arquivos de migrations
	TYPEORM_ENTITIES_DIR: Mostra onde procurar por entities
	TYPEORM_MIGRATIONS_DIR: Mostra onde  procurar por migrations

### Scripts do package.json

|     Comando     |                   Descrição                    |               Quem usa                |
| --------------- | ---------------------------------------------- | ------------------------------------- |
| dev             | inicia o ts-node-dev                           | Docker dev                            |

### Sistema de pastas

* Docs: Pasta com as informações e detalhes do projeto, além de guias sobre sua execução

* Src: source da api
	* controllers: Camada responsável pelo tratamento das informações recebidas do endpoint.
    * database
        * entity: entidades do banco de dados.
		* index: Arquivo responsável por fazer a conexão com o postgresql.
   * repositories: camada responsável por acesso ao banco, nenhum lógica de negocio.
   * routes: endpoint com as routes do enpoint especificas do modulo.
   * services: camada responsável pela lógica de nogocio.
   * @types: arquivos usados para guiar o Typescript quando uma tipagem não é encontrada.
   * utils: Recursos que são reusados.
   * api.ts: Arquivo que guarda as configuarções e recursos que todo servidor irá usar.
   * swagger.json: Arquivo de configurações usado pela documentação da API on-line.

### Demais Aquivos na Raiz

* docker-compose.yml: Arquivo criado para o docker-compose.

* Dockerfile: Arquivo com instruções para o container dentro do docker executar.
