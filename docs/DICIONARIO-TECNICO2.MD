# Sabor Carioca - Dicionário Técnico

Auth

O que este módulo faz?

Responsável pela autenticação.

LoginDTO

O que é?
Dados recebidos no login.
{
  "email": "usuario@email.com",
  "password": "12345678"
}

LoginSchema
O que é?
Valida os dados recebidos.

Responsabilidade:
Verificar email e senha.

Fluxo:

Request
↓
Validação
↓
LoginService

LoginService

O que é?
Executa as regras do login.
Fluxo:
Buscar usuário
↓
Verificar senha
↓
Gerar token

AuthRepository

O que é?
Procura usuários no banco.

Métodos:
findByEmail()
findById()

Users
O que este módulo faz?
Responsável pelos usuários.

UserSchema
O que é?
Define como um usuário é armazenado.
Campos:
name
email
password
role
active

Conceitos Gerais
Controller
Minha definição:
Recebe requisições.

Exemplo:LoginController

Service
Minha definição:
Executa regras de negócio.
Exemplo:
LoginService

Repository
Minha definição:
Procura e salva dados.
AuthRepository


Schema
Minha definição:
Define uma estrutura de dados.
UserSchema

DTO
Minha definição:
Define os dados que entram e saem.
LoginDTO

A vantagem é que, quando você criar um módulo novo:

products

você acrescenta:
# Products

## ProductSchema

...

## CreateProductService

...

## ProductRepository

...
