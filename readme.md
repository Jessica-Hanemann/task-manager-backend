# Task Manager - Backend

## Descrição

API RESTful para gerenciamento de tarefas, desenvolvida em Node.js com Express e MongoDB. Este projeto é parte de uma aplicação full-stack voltada para o gerenciamento de tarefas, permitindo criar, atualizar, visualizar e deletar tarefas. Em breve terá integração com o front-end (react).

---

## Estrutura do Projeto

```bash
.
├── index.js
├── package.json
├── src
│   ├── controllers
│   │   └── task.controller.js
│   ├── database
│   │   └── mongoose.database.js
│   ├── errors
│   │   ├── general.errors.js
│   │   └── mongodb.errors.js
│   ├── models
│   │   └── task.model.js
│   └── routers
│       └── task.routers.js
└── .env
```

---

## Funcionalidades

-   Criar tarefas
-   Listar todas as tarefas
-   Buscar tarefa por ID
-   Atualizar tarefa
-   Deletar tarefa

---

## Tecnologias Utilizadas

-   Node.js
-   Express
-   Git e GitHub (para versionamento e hospedagem do código)
-   JSON View (para visualização de dados)
-   MongoDB (banco de dados NoSQL)
-   Network Access para MongoDB (para acesso remoto)
-   MongoDB Compass (para visualização e gerenciamento do banco de dados)
-   Mongoose (biblioteca para interação com o banco de dados MongoDB)
-   Schema Mongoose (definição do esquema dos dados)
-   Postman (ferramenta de teste e desenvolvimento de APIs)
-   Variáveis de ambiente com o Postman (para simular requisições com diferentes valores)
-   Express Middleware (express.json) (para tratamento de JSON em requisições)
-   Router Express (para organizar as rotas da API)
-   Dotenv (para gerenciamento de variáveis de ambiente)
-   Render (para hospedagem do aplicativo)

---

## Pré-requisitos

-   Node.js
-   MongoDB Atlas configurado
-   Postman (para testes)

---

## Variáveis de Ambiente

```plaintext
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
PORT=porta_opcional
```

---

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/task-manager-backend.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd task-manager-backend
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

---

## Uso

1. Inicie o servidor:

    ```bash
    npm run dev
    ```

2. Acesse a API pelo endpoint base:

    ```bash
    http://localhost:8000/tasks
    ```

---

## Testes com Postman

-   Configure as requisições com o endpoint local.
-   Utilize variáveis de ambiente no Postman para facilitar os testes.

---

## Autor

Criado por Jéssica Hanemann
