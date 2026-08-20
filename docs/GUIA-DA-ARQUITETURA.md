# Guia de Arquitetura - Sabor Carioca

## Como analisar um módulo

Antes de criar qualquer arquivo, responder:

1. Qual o objetivo?

2. O que já existe?

3. O que o sistema precisa fazer?

4. Quem é responsável por cada etapa?

5. Qual é o resultado esperado?



# Auth

Objetivo:
Permitir que o usuário entre no sistema.

Fluxo:

Usuário
↓
LoginController
↓
LoginSchema
↓
LoginService
↓
AuthRepository
↓
UserSchema
↓
Banco

Arquivos:

LoginDTO
→ dados do login

LoginSchema
→ valida os dados

LoginController
→ recebe a requisição

LoginService
→ valida credenciais

AuthRepository
→ busca usuários

UserSchema
→ estrutura do usuário

## Módulo Users

Objetivo:
Gerenciar usuários.

O que já existe?
- UserSchema

O que o sistema precisa fazer?
- Criar usuários
- Alterar usuários
- Buscar usuários
- Listar usuários
- Desativar usuários

Quem é responsável?

UserRepository
→ Busca e salva usuários.

CreateUserService
→ Cria usuários.

UpdateUserService
→ Atualiza usuários.

ListUsersService
→ Lista usuários.

GetUserService
→ Busca um usuário.

DeactivateUserService
→ Desativa usuários.

Resultado esperado:
Usuários gerenciados pelo sistema.

## Users

Operações:

CREATE
→ Criar usuário

READ
→ Buscar usuário

READ MANY
→ Listar usuários

UPDATE
→ Atualizar usuário

DEACTIVATE
→ Desativar usuário
