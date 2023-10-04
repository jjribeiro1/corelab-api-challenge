# Como rodar localmente
Após clonar o projeto

Execute o comando a seguir para instalar as dependencias
```bash
  npm install
```

#### - Para iniciar o postgres localmente voce precisa criar um arquivo .env com uma variavel **DATABASE_URL** que contém uma string de conexão do postgres.

#### - Uma string de conexão do postgres é composta por: **postgresql://USER:PASSWORD@HOST:PORT/DATABASE**

#### - Em caso de dúvida: https://www.prisma.io/docs/concepts/database-connectors/postgresql

#### - Após adicionar a váriavel de ambiente DATABASE_URL:

```bash
npx prisma db push
```

Rode o projeto com:
```bash
  npm run dev
```
## Tecnologias utilizadas

#### - Express / Typescript / Class Validator / Prisma / Postgres


## Funcionalidades

- Usuários podem criar, ler, editar e deletar notas.
- Usuários podem marcar itens como favorito.



## Algumas Observações

- Separação do projeto em 4 camadas (middleware, controller, service e repository).
- Middleware para verificar se os dados enviados no corpo da requisição estão corretos.
- Controller responsável por enviar a resposta ou mensagens de erros e status code adequados para o usuário.
- Service para fazer validações.
- Repositório responsável por acessar o banco de dados.
- Talvez a resposta da api demore um pouco no início por motivos de: FREE TIER DO RENDER que ativa um sleep depois de um certo tempo de inatividade


## Demonstração

Voce pode ver a versão em produção do projeto completo
**(FrontEnd + Backend)** nesse link:
https://corelab-web-challenge-ten.vercel.app/


Caso queira o código fonte do FrontEnd: https://github.com/jjribeiro1/corelab-web-challenge

