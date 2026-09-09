# 🎫 Sistema de Chamados — HelpDesk

Aplicação Full Stack desenvolvida com **React.js, Node.js e MongoDB** para gerenciamento de chamados de suporte.

O usuário pode criar uma conta, realizar login e gerenciar seus próprios chamados, acompanhando informações como **status, prioridade e categoria** através de um dashboard.

---

## 📸 Imagem do projeto

## 📸 Preview

![Sistema de Chamados HelpDesk](https://github.com/MykeMartins96/sistema-chamados-helpdesk/blob/main/client/Captura%20de%20tela%202026-09-08%20213345.png?raw=true)

---

## 🚀 Sobre o projeto

O **Sistema de Chamados — HelpDesk** foi desenvolvido para simular o funcionamento de uma aplicação de suporte e gerenciamento de solicitações.

A aplicação integra Front-End, Back-End, autenticação e banco de dados em um fluxo completo.

Após realizar o login, cada usuário pode criar e gerenciar seus próprios chamados. Os dados são armazenados no MongoDB e apresentados através de uma interface com filtros, busca, cards e dashboard com estatísticas.

---

## ✨ Funcionalidades

- 👤 Cadastro de usuários
- 🔐 Login e autenticação com JWT
- 🛡️ Rotas protegidas
- 🎫 Criação de chamados
- ✏️ Edição de chamados
- 🗑️ Exclusão de chamados
- 🔄 Alteração do status dos chamados
- 🔎 Busca de chamados
- 🎯 Filtro por status
- ⚡ Filtro por prioridade
- 📂 Filtro por categoria
- 📊 Dashboard com estatísticas
- 📈 Gráfico com distribuição dos chamados
- 👤 Separação dos chamados por usuário
- 💾 Persistência dos dados no banco de dados
- 📱 Interface responsiva para diferentes tamanhos de tela

---

## 🛠 Tecnologias utilizadas

### 🎨 Front-End

- **React.js** — construção da interface e componentização
- **JavaScript** — lógica e funcionalidades
- **Vite** — ambiente de desenvolvimento do Front-End
- **Styled Components** — estilização dos componentes
- **Axios** — comunicação com a API REST
- **React Router DOM** — navegação e proteção de rotas
- **Recharts** — criação dos gráficos do dashboard
- **Lucide React** — ícones da interface

### ⚙️ Back-End

- **Node.js** — ambiente de execução do servidor
- **Express.js** — criação da API REST
- **MongoDB** — persistência dos usuários e chamados
- **Mongoose** — modelagem e comunicação com o MongoDB
- **JWT** — autenticação e proteção das rotas

### 🚀 Deploy

- **Vercel** — Front-End
- **Render** — Back-End
- **MongoDB Atlas** — banco de dados

---

## 🔐 Autenticação e rotas protegidas

A aplicação utiliza **JSON Web Token (JWT)** para autenticação.

Após realizar o login, o Back-End gera um token que é armazenado pelo Front-End e enviado nas requisições que precisam de autenticação.

O Back-End valida esse token antes de permitir o acesso às rotas protegidas e utiliza as informações do usuário autenticado para buscar e manipular somente os chamados pertencentes àquela conta.

---

## 🔄 Como funciona

O fluxo da aplicação funciona da seguinte maneira:

1. O usuário cria uma conta ou realiza login.
2. O Back-End valida os dados e gera um token JWT.
3. O React utiliza o token nas requisições protegidas.
4. O usuário pode criar um novo chamado.
5. O Front-End envia os dados para a API REST.
6. O Back-End processa a requisição.
7. O chamado é armazenado no MongoDB vinculado ao usuário.
8. O Front-End consulta os dados e atualiza a interface.
9. O dashboard apresenta as estatísticas dos chamados.

---

## 🏗️ Arquitetura da aplicação

```text
Usuário
   ↓
React.js
   ↓
Axios / API REST
   ↓
JWT / Rotas protegidas
   ↓
Node.js + Express
   ↓
Mongoose
   ↓
MongoDB
   ↓
Chamados / Dashboard
```

Essa arquitetura permite separar a interface, a autenticação, a lógica do servidor e a persistência dos dados.

---

## 🎫 Gerenciamento de chamados

Os chamados podem ser organizados utilizando diferentes informações.

### Status

- Aberto
- Em andamento
- Resolvido

### Prioridade

- Alta
- Média
- Baixa

### Categoria

- Acesso
- Financeiro
- Suporte Técnico
- Cadastro

Além disso, o usuário pode utilizar a busca e combinar filtros para localizar chamados com mais facilidade.

---

## 📊 Dashboard

O dashboard utiliza os dados dos chamados do usuário para apresentar uma visão geral do sistema.

São exibidas informações como:

- Total de chamados
- Chamados abertos
- Chamados em andamento
- Chamados resolvidos
- Chamados de alta prioridade
- Distribuição dos chamados por status através de gráfico

---

## 🧠 O que pratiquei neste projeto

Durante o desenvolvimento do Sistema de Chamados — HelpDesk, pratiquei conceitos importantes de desenvolvimento web, como:

- Desenvolvimento de interfaces com React
- Componentização
- Gerenciamento de estado
- Navegação com React Router
- Criação de rotas protegidas
- Consumo de API REST com Axios
- Integração entre Front-End e Back-End
- Criação de API com Node.js e Express
- Operações CRUD
- Autenticação com JWT
- Criação de middleware de autenticação
- Persistência de dados com MongoDB
- Modelagem utilizando Mongoose
- Associação dos dados ao usuário autenticado
- Busca e filtros
- Criação de dashboard
- Visualização de dados com gráficos
- Tratamento de erros
- Variáveis de ambiente
- Responsividade
- Organização de uma aplicação Full Stack

---

## 💡 Desafios durante o desenvolvimento

Durante o desenvolvimento, trabalhei principalmente na integração entre **React, Node.js, autenticação JWT e MongoDB**.

Também foram realizados ajustes relacionados à proteção das rotas, associação dos chamados ao usuário autenticado, implementação das operações CRUD, filtros, atualização dos status e exibição das estatísticas no dashboard.

Outro ponto trabalhado foi a adaptação da interface para diferentes tamanhos de tela, mantendo o gerenciamento dos chamados funcional tanto em desktop quanto em dispositivos menores.

Esses desafios contribuíram para uma melhor compreensão do fluxo completo de uma aplicação Full Stack com autenticação e dados separados por usuário.

---

## 🌐 Projeto publicado

O projeto será publicado utilizando **Vercel e Render**.

> O link será adicionado após a publicação.

---

## 💻 Código-fonte

Repositório:

https://github.com/MykeMartins96/sistema-chamados-helpdesk

---

## 👨‍💻 Autor

**Myke Santana Martins**

Desenvolvedor Front-End em formação, com experiência prática na criação de aplicações utilizando **React.js, JavaScript, APIs REST e integração com Back-End em Node.js**.

- GitHub: https://github.com/MykeMartins96
- LinkedIn: https://www.linkedin.com/in/myke-santana-martins
