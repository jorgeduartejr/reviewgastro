# reviewgastro

## Projeto para a disciplina de Programação para a WEB (2023.2)

### Descrição

Este é um projeto desenvolvido para a disciplina de Programação para a WEB. O objetivo do projeto é criar uma aplicação para revisão de restaurantes.

### Estrutura do Projeto

reviewgastro/ ├── .adonisrc.json ├── .editorconfig ├── .env.example ├── .env.test ├── .gitignore ├── .prettierignore ├── ace ├── ace-manifest.json ├── app/ │ ├── Controllers/ │ ├── Exceptions/ │ ├── Middleware/ │ ├── Models/ │ ├── Services/ │ └── Validators/ ├── commands/ │ └── index.ts ├── config/ │ ├── ally.ts │ ├── app.ts │ ├── auth.ts │ ├── bodyparser.ts │ ├── cors.ts │ └── ... ├── contracts/ ├── database/ ├── env.ts ├── package.json ├── postcss.config.js ├── providers/ ├── public/ ├── resources/ ├── server.ts ├── start/ ├── tailwind.config.js ├── test.ts ├── tests/ ├── tsconfig.json └── webpack.config.js

### Pré-requisitos

- Node.js (versão 14 ou superior)
- NPM ou Yarn

### Instalação

1. Clone o repositório:

```sh
git clone https://github.com/seu-usuario/reviewgastro.git
cd reviewgastro

2. Instale as dependências:

npm install
# ou
yarn install

3. Configure as variáveis de ambiente:

Copie o arquivo .env.example para .env e ajuste as variáveis conforme necessário.

cp .env.example .env

4. Configure o banco de dados:

Edite o arquivo .env para adicionar as configurações do seu banco de dados.
Execute as migrações para criar as tabelas no banco de dados:

node ace migration:run

Executando o Projeto

1.Inicie o servidor de desenvolvimento:

npm run dev
# ou
yarn dev

2. Acesse a aplicação no navegador:

http://localhost:3333

Testes

Para executar os testes, utilize o comando:

npm test
# ou
yarn test

Estrutura de Pastas
app/Controllers/: Controladores da aplicação.
app/Exceptions/: Tratamento de exceções.
app/Middleware/: Middlewares da aplicação.
app/Models/: Modelos da aplicação.
app/Services/: Serviços da aplicação.
app/Validators/: Validações da aplicação.
config/: Arquivos de configuração.
database/: Arquivos relacionados ao banco de dados.
public/: Arquivos públicos (CSS, JS, imagens, etc).
resources/: Recursos da aplicação (views, templates, etc).
start/: Arquivos de inicialização da aplicação.
tests/: Testes da aplicação.

Contribuição
Faça um fork do projeto.
Crie uma branch para sua feature (git checkout -b feature/nova-feature).
Commit suas mudanças (git commit -am 'Adiciona nova feature').
Faça o push para a branch (git push origin feature/nova-feature).
Abra um Pull Request.
Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes. ```