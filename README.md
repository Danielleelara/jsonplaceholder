
# 📋 Projeto Posts

Este é um projeto front-end desenvolvido com React, que simula uma interface com uma lista de postagens. A estilização é feita com Tailwind CSS, enquanto os testes de componentes são executados com o Vitest. A integração contínua é realizada por meio do GitHub Actions, que executa um job automatizado para verificar se todos os testes estão passando a cada novo push na branch principal (main) — e, em seguida, realiza o deploy no ambiente de produção na Vercel.

# Tela

![image](https://github.com/user-attachments/assets/a64fe0ee-2f42-4aa7-b116-ddf77f899b35)


## 🔥 Funcionalidades

- Tabela exibindo a lista de postagens com id, título, texto, usuário e ações
- Edição inline na tabela
- Filtro de pesquisa
- Paginação limitada a cinco itens por página, otimizando o tempo de resposta da API
- Botões de edição e salvar para confirmar a edição de uma linha na tabela, sendo possível alterar apenas título e texto.
- Loading para dar feedback da espera pela resposta e api e alerta em caso de erro na requisição de dados

## 🛠️ Tecnologias e Ferramentas

- [React](https://reactjs.org/)
- [Vitest](https://vitest.dev/)
- [React Router](https://reactrouter.com/)
- [Vercel](https://vercel.com/) (deploy automático)

## 📦 Instalação e uso

Clone o projeto e instale as dependências:

```bash

git clone https://github.com/Danielleelara/jsonplaceholder
cd jsonplaceholder
yarn install

Para iniciar o projeto localmente:
yarn vite
Acesse em: http://localhost:5173

🧪 Testes
Para executar os testes unitários:

yarn test
Os testes cobrem os componentes de forma unitária, garantindo estão sendo renderizados corretamente.

🚀 Deploy
O deploy é feito automaticamente na Vercel toda vez que há um push na branch main. O pipeline está configurado para:

- Rodar os testes com o Vitest.

- Se os testes passarem, gerar o build.

- Publicar na Vercel.

Acesse o ambiente de produção em: (https://jsonplaceholder-danielleelaras-projects.vercel.app/)

🧾 Estrutura de Pastas

src/
├── assets/              # Ícones reutilizáveis
├── components/          # Componentes reutilizáveis (Footer, Loading, NavBar, Pagination e Table)
│   └── __tests__/       # Testes unitários dos componentes
└── pages/               # Páginas da aplicação (ex: Home)


👩‍💻 Autora

Desenvolvido por Danielle Souza
