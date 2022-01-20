DESENVOLVIMENTO
===============

### Ambiente

* Node
* Yarn (pode ser alterado para npm, mas vai precisar alterar os scripts também)
* Docker com docker-compose

### Iniciando 

```Terminal
docker-compose up
# levantará o docker com o banco de dados e a aplicação.
# Ele irá instalar dentro do container todos os recursos cruciais para a API,
# depois aguardará alterações nós arquivos.
```

Pronto, agora é só acessar a rota:
	http://localhost:8080/docs
para acessar a documentação da API online

### Typescript

Ele auxilia muito durante o desenvolvimento, todos os recursos serão prontamente instalados na Api,
caso haja incorrelações entre seu editor e o projeto, sinta se a vontade para executar dentro da raiz do projeto:

```Terminal
# npm install
	ou
# yarn install 
```

Caso não encontre basta adicionar na pasta @types/caminho_desejado, o conteudo abaixo,
assim você poderá utilizar ela mas sem suporte a verificação de tipagem.

```ts
declare module 'lib-nova';
```
### Banco de dados e migrations

Suporte para: Postgres, MSSQL, MySQL, MariaDB e SQLite3  

* TypeORM é responsável por montar todas as queries e transpilar o código .Ts em instruções SQL nativas

Para mais informações veja a documentação do 
[TypeORM](https://typeorm.io/#/).

### Swagger

* Swagger é responsável por nós enviar a documentação da API online

Mais informações podem ser vistas aqui:
[Swagger](https://swagger.io/).
