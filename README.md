# nest_clean

Um projeto backend construído com Nest.js e Prisma, seguindo os princípios de Clean Architecture.

## Sobre o Projeto

Esta é uma aplicação desenvolvida com Nest.js, um framework Node.js para construir aplicações de servidor eficientes e escaláveis. Ele utiliza Prisma como ORM para interação com o banco de dados. A estrutura do projeto é organizada seguindo os conceitos de Clean Architecture para promover um código mais limpo, manutenível e testável.

## Funcionalidades

- Autenticação de usuários
- Gestão de perguntas e respostas (exemplo)

## Tecnologias

- [Nest.js](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/) (utilizado com Docker)

## Começando

Para rodar este projeto localmente, siga os passos abaixo.

### Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/) (para o banco de dados)

### Instalação

1.  Clone o repositório:

    ```bash
    git clone <URL_DO_SEU_REPOSITORIO_AQUI>
    cd nest_clean
    ```

2.  Instale as dependências:

    ```bash
    npm install
    ```

3.  Configure as variáveis de ambiente. Renomeie o arquivo `.env.example` para `.env` e preencha com suas credenciais do banco de dados.

    ```
    DATABASE_URL="postgresql://docker:docker@localhost:5432/nest_clean?schema=public"
    ```

4.  Inicie o container do banco de dados com Docker:

    ```bash
    docker-compose up -d
    ```

5.  Rode as migrações do Prisma:

    ```bash
    npx prisma migrate dev
    ```

6.  Inicie a aplicação em modo de desenvolvimento:
    ```bash
    npm run start:dev
    ```

A aplicação estará disponível em `http://localhost:3000`.

## Scripts Disponíveis

- `npm run build`: Compila a aplicação para produção.
- `npm run format`: Formata o código com Prettier.
- `npm run start`: Inicia a aplicação em modo de produção.
- `npm run start:dev`: Inicia a aplicação em modo de desenvolvimento com watch.
- `npm run lint`: Executa o linter para análise de código.

## Estrutura do Projeto (Exemplo)

\`\`\`
src
├── application
│   ├──- repositories
│   └──- use-cases
├── domain
│   └──- entities
├── infra
│   ├──- database
│   ├──- http
│   └──- messaging
└── main
└──- main.ts
\`\`\`
