# pbe2-vpf01-2025
Trabalho pbe aula 05
# README

## Descrição do Projeto
Este é um sistema de gerenciamento de pedidos para uma pizzaria, desenvolvido utilizando **Node.js** e **Prisma ORM** com **MySQL**. O projeto permite a criação, leitura, atualização e remoção de pedidos, clientes e pizzas, garantindo um controle eficiente dos pedidos realizados.

## Tecnologias Utilizadas
- **Node.js** - Ambiente de execução JavaScript
- **Express.js** - Framework para criação de APIs
- **Prisma ORM** - Gerenciamento de banco de dados
- **MySQL** - Banco de dados relacional
- **Docker** - Containerização do banco de dados (opcional)
- **Insomnia** - Teste das rotas da API

## Como Executar o Projeto

### 1. Clonar o repositório
```sh
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instalar as dependências
```sh
npm install
```

### 3. Configurar o banco de dados
Crie um arquivo `.env` na raiz do projeto e defina a variável `DATABASE_URL` com a URL de conexão do MySQL:
```sh
DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"
```

Se estiver usando **Docker**, pode rodar o seguinte comando para subir um container MySQL:
```sh
docker run --name mysql-pizza -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=pizzaria -p 3306:3306 -d mysql:latest
```

### 4. Rodar as migrações do Prisma
```sh
npx prisma migrate dev --name init
```

### 5. Iniciar o servidor
```sh
npm start
```
O servidor estará rodando em `http://localhost:3000`

### 6. Testar a API
Utilize o **Insomnia** ou o **Postman** para testar as seguintes rotas:

#### Criar um pedido
**POST** `http://localhost:3000/pedidos`
```json
{
  "data": "2025-03-24T12:00:00.000Z",
  "hora": "12:00",
  "valor": 45.00,
  "clienteId": 1,
  "pizzas": [
    { "pizzaId": 1, "quantidade": 2, "valor": 22.50 }
  ]
}
```

#### Listar todos os pedidos
**GET** `http://localhost:3000/pedidos`

#### Buscar um pedido específico
**GET** `http://localhost:3000/pedidos/:id`

#### Atualizar um pedido
**PUT** `http://localhost:3000/pedidos/:id`
```json
{
  "data": "2025-03-24T13:00:00.000Z",
  "hora": "13:00",
  "valor": 50.00,
  "clienteId": 1,
  "pizzas": [
    { "pizzaId": 1, "quantidade": 1, "valor": 25.00 }
  ]
}
```

#### Deletar um pedido
**DELETE** `http://localhost:3000/pedidos/:id`

---
Desenvolvido por **Gabriel B. Zanon** 🚀

