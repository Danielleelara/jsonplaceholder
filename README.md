
📋 Projeto Posts
Este é um projeto front-end desenvolvido com React, que simula uma interface de gerenciamento de dragões. Ele utiliza o Tailwind para estilizaçao, Vitest para rodar os testes de componentes, GitHubActions para rodar um jog a cada push para a branch principal "main".

🐉 Tela

![alt text](src/assets/home.png)

🔥 Funcionalidades

📋 Tabela exibindo a lista de posts (API real)
✏️ Edição inline de um item na tabela

🛠️ Tecnologias e Ferramentas
React
Javascript
Vitest
Vercel (deploy automático)

📦 Instalação e uso
Clone o projeto e instale as dependências:

git clone https://github.com/Danielleelara/jsonplaceholder
cd jsonplaceholder
yarn install

Para iniciar o projeto localmente:
yarn start
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

Acesse o ambiente de produção em: https://dragon-eta-ivory.vercel.app/

🧾 Estrutura de Pastas

src/
├── components/    # Componentes reutilizáveis: Footer/Loading/NavBar/Pagination/Table
|   └── tests/     # Testes unitários dos components
├── assets/        # Ícones reutilizáveis
└── pages/         # Página: Home


👩‍💻 Autora
Desenvolvido por Danielle Souza