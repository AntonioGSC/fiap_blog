# FIAP Blog

## 📋 Sobre

📌 [https://fiap-blog-antonio.netlify.app](https://fiap-blog-antonio.netlify.app/)

Este é um repositório criado como avaliação final da disciplina de Front-End Engineering e UX, um aplicativo de blog desenvolvido usando React + Vite e integrado com o Contentful para gerenciar o conteúdo. Nele é possível visualizar os 5 últimos posts cadastrados no Contentful, é possível visualizar cada post de maneira independente e acessar uma listagem paginada com todos os posts.

Na tela de listagem geral é possível visualizar todos os posts por meio da paginação e também alterar o número de itens em cada uma das páginas. A paginação é feita a partir do Contentful, ou seja, ele não busca todos os posts de uma só vez e faz a paginação em memória e sim faz uma nova requisição solicitando outros posts utilizando o parâmetro skip, isso resulta em requisições menores e mais velozes, usando menos processamento de ambos os lados.

## 🛠️ Construído utilizando

- HTML / CSS / JS / TypeScript
- [React](http://www.dropwizard.io/1.0.2/docs/) - Front-end Library
- [Bootstrap](https://getbootstrap.com/) - CSS Framework
- [Vite](https://vitejs.dev/) - Server
- [Contentful](https://www.contentful.com/) - Back-end
- [Contentful](https://www.contentful.com/) - Banco de dados
- [Netlify](https://www.netlify.com/) - Host

## 🔧 Instalação e execução

Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/seu_usuario/fiap_blog.git

# entrar na pasta do projeto front end web
cd fiap_blog

# instalar dependências
npm install

# criar um .env na raiz do repositório e preencher com as variáveis de ambiente da seguinte forma
VITE_CONTENTFUL_SPACE_ID = 'seu_space_id'
VITE_CONTENTFUL_ACCESS_TOKEN = 'seu_access_token'

# executar o projeto
npm start dev
```

## ✒️ Autor

Antonio Gabriel dos Santos Carvalho

https://www.linkedin.com/in/antoniogscarvalho/
