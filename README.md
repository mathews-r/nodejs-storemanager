# :scroll: Store Manager

API para controle de dados de vendas de produtos.

## :link: Objetivo do projeto 
Desenvolver uma API utilizando a arquitetura MSC (model-service-controller)!

A API RESTFUL é um sistema de gerenciamento de vendas no formato dropshipping em que será possível criar, visualizar, deletar e atualizar produtos e vendas. Utilizei o banco de dados MySQL para a gestão de dados. Além disso.

## ⚙️ Funcionalidades
✅ Criar API Restful;

✅ Fazer um CRUD;

✅ Criação de endpoints;

✅ Testes na aplicação;

## :hammer_and_wrench: Ferramentas 
### 🍮 Backend
- NodeJS;
- Javascript;
- Express;
- Testes Sinon e Mocha;
- CRUD;

<details>
<summary><strong>🐳 Rodando no Docker vs Localmente</strong></summary>

### 👉 Com Docker

**:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior.**

> :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d`.

- Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;
- Esses serviços irão inicializar um container chamado `store_manager` e outro chamado `store_manager_db`;
- A partir daqui você pode rodar o container `store_manager` via CLI ou abri-lo no VS Code.

> :information_source: Opção 2: Use o comando `docker exec -it store_manager bash` e sigas passos abaixo.

- Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

> :information_source: Instale as dependências com `npm install`

 <br />

### 👉 Sem Docker

> :information_source: Instale as dependências `npm install`

- **:warning: Atenção:** Não esqueça de renomear/configurar o arquivo `.env.example` para os testes locais funcionarem.
- **:warning: Atenção:** Para rodar o projeto desta forma, **obrigatoriamente** você deve ter o `Node.js` instalado em seu computador.
- **:warning: Atenção:** A versão do `Node.js` e `NPM` a ser utilizada é `"node": ">=16.0.0"` e `"npm": ">=7.0.0"`, como descrito a chave `engines` no arquivo `package.json`. Idealmente deve-se utilizar o Node.js na `versão 16.14`, a versão na que esse projeto foi testado.

  <br/>
</details>

## 📁 Acessar Projeto Localmente

- *Clonar o repositório:*

```
$ git clone git@github.com:mathews-r/storemanager.git
```

- *Acessar o projeto Store Manager:*

```
$ cd storemanager
```

- *Instalar dependências:*

```
$ npm install
```

- *Executar projeto:*

```
$ npm start ou npm run debug
```
- *Executar os testes do projeto:*

```
$ npm run test
```
## 👨‍💻 Desenvolvedor

- [Mathews Rodrigues](https://www.linkedin.com/in/mathewsrodrigues/)
