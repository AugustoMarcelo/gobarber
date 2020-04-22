## 💥 Gobarber | Gostack 11

Versão atualizada do GoBarber com mudanças desde o layout às tecnologias utilizadas. A aplicação segue o mesmo conceito da versão anterior, permitindo gerenciar usuários administradores, clientes, agendamentos e outras funcionalidades em um ambiente de barbearia.

---

## 🚀 Funcionalidades
 > Em desenvolvimento

---

## ⚙ Tecnologias
 - NodeJS, ReactJS e React Native (back end, front end e mobile, respectivamente)
 - Typescript
 - Docker

 - typeorm
 - express
 - uuidv4
 - date-fns
 - multer
 - axios
 - react-router-dom
 - styled-components
 - polished
 - react-spring
 - yup

---

> Inicialmente precisamos clonar o repositório para ter acesso a todas as pastas
```bash
  # Clonando repositório
  git clone https://github.com/AugustoMarcelo/gobarber.git
```

## 💻 Instruções para o back end

  Primeiramente você precisará criar um arquivo contendo as informações de acesso ao seu banco de dados. Esta aplicação foi desenvolvida utilizando o **Postgres**. Crie um arquivo chamado *ormconfig.json* na pasta `backend` e preencha conforme o arquivo-modelo *ormconfig.example.json*.
  
 ```bash
  # Acessar a pasta do back end
  cd backend

  # Baixar as dependências
  yarn

  # Executar as migrations
  yarn typeorm migration:run

  # Inicializar o servidor de desenvolvimento
  yarn dev:server
 ```

---

## 💻 Instruções para o front end
 
  Após executar o passo anterior e garantir que o back end está rodando, você poderá inicializar o front end:

 ```bash
  # Acessar a apsta do front end
  cd frontend

  # Baixar as dependências
  yarn

  # Inicializar a aplicação
  yarn start
 ```

---
 
## 📱 Instruções para o mobile
  > Em desenvolvimento

## 📸 Interfaces da aplicação
  > Em desenvolvimento

  *Páginas de Login e de Cadastro*
  <img src="https://user-images.githubusercontent.com/11545976/79991191-5e41a300-8488-11ea-9374-1a2a75278e75.gif" />
 