Regra 1: Adicione termos quando eles aparecerem

Repository
Service
Controller
Schema
DTO


Repository
→ Procura dados no banco.
Exemplo:
AuthRepository


Regra 2: Sempre registre um exemplo do seu projeto
Service
→ Camada de negócio.
Service → Camada de negócio.

Service
→ Executa regras.

Exemplo:
LoginService verifica se o usuário pode entrar.

Regra 3: Crie categorias

Por exemplo:

# Arquitetura

Controller
Service
Repository

# Banco de Dados

Schema
Model
Collection

# API

Route
Endpoint
Request
Response

# Autenticação

Login
JWT
Role
Middleware

Arquitetura
Controller Service Repository

Banco de Dados
Schema Model Collection

API
Route Endpoint Request Response

Autenticação
Login JWT Role Middleware

Regra 4: Atualize após cada sessão

Terminou de estudar ou programar?

Pergunte:

Qual termo novo apareceu hoje?

Middleware

Regra 5: Revise durante as auditorias

Hoje, por exemplo, descobrimos:

AuthRepository
→ procura usuários


Um modelo que combina com seu jeito

# Repository

Como eu entendo:
→ Quem procura informações no banco.

Nome técnico:
→ Repository.

Exemplo no projeto:
→ AuthRepository.

---

# Service

Como eu entendo:
→ Quem decide as regras.

Nome técnico:
→ Service.

Exemplo no projeto:
→ LoginService.

---

# Controller

Como eu entendo:
→ Quem recebe a requisição.

Nome técnico:
→ Controller.

Exemplo no projeto:
→ LoginController.