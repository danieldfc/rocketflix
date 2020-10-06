# :construction: Backend

Será responsável de entregar rotas de acesso ao frontend, e se caso já foi desenvolvido, não esquenta, este repositório é público e sempre precisa de melhorias, com certeza é uma boa você estar visualizando de forma geral, para poder entender e saber onde pode melhorar.

## :scroll: Tabela de conteúdo

- [Insomnia](#pushpin-insomnia)
- [Executar](#hammer-executar)
- [Rotas](#vertical_traffic_light-rotas)
- <a href="../../README.md">Voltar para o README principal</a>

---

## :pushpin: Insomnia

Você pode utilizar o [insomnia](https://insomnia.rest) para testar as rotas da aplicação, clicando no botão abaixo:

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Rocketflix&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fdanieldfc%2Frocketflix%2Fmaster%2Fexport.json)

---

## :hammer: Executar

Inicialmente você poderá usar os seguintes comandos para usar na aplicação, onde são gerenciados através do **package.json** na propriedade `scripts`:

- **yarn dev:server** - Para quando querer que o servidor fique ouvindo as alterações e seja restartado.
- **yarn start** - Para que o servidor seja iniciado uma vez.
- **yarn test** - Para caso você esteja realizando testes para a aplicação.

O projeto está sendo utilizado o docker para melhor gerencia-lo, aqui uma linha de comando para te ajudar:

```shell
$ docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

E antes de inicializar o container será preciso indicar algumas configurações feitas por você no arquivo `.env`, este arquivo você criará na pasta `backend` e deverá ser seguido a mesma configuração que está no arquivo de exemplo: `.env.example`. Lembrando que o arquivo `.env` não poderá entrar neste repositório online, para manter os dados sensíveis da aplicação somente local.

Voltando para o projeto, crie o seu database, referenciando no `.env`. Logo depois, você poderá migrar suas tabelas para o seu banco de dados, assim:

```shell
$ yarn sequelize db:migrate
```

Agora com tudo configurado, você poderá inicializar o desenvolvimento e rodar o servidor localmente, executando:

```shell
$ yarn dev:server
```

---

## :vertical_traffic_light: Rotas

Agora,será mostrado para você as rotas que serão e que já foram feitas neste projeto, peço para que todos que sentirem a necessidade de estar modificando ou incluindo alguma rota, peço para que assim possa documentar.

  - [x] `POST http://localhost:3333/users` - Cria um novo usuário

  - [x] `POST http://localhost:3333/sessions` - Cria uma nova sessão para o usuário

  **Rotas que precisa estar autenticado**

  - :person_with_blond_hair: Users

    - [x] `PUT http://localhost:3333/users` - Atualiza o usuário logado

  - :framed_picture: Files

    - [x] `POST http://localhost:3333/files` - Inclue arquivos de imagem para avatar e vídeos

  - :movie_camera: Videos

    - [x] `GET http://localhost:3333/videos` - Lista todos os vídeos

    - [ ] `GET http://localhost:3333/videos/:id` - Lista um único vídeo

    - [x] `POST http://localhost:3333/videos` - Cria um vídeo

    - [x] `PUT http://localhost:3333/videos/:id` - Atualiza um vídeo

    - [x] `DELETE http://localhost:3333/videos/:id` - Deleta um vídeo

  - :memo: Tags

    - [ ] `GET http://localhost:3333/tags` - Lista todas as tags

    - [ ] `GET http://localhost:3333/tags/:title_tag/videos` - Lista vídeos daquela tag

    - [ ] `POST http://localhost:3333/tags` - Cria tag

    - [ ] `PUT http://localhost:3333/tags/:id` - Atualiza uma tag

    - [ ] `DELETE http://localhost:3333/tags/:id` - Deleta uma tag

  - :pushpin: Notificação

    - [ ] `GET http://localhost:3333/notifications` - Lista notificações

    - [ ] `PUT http://localhost:3333/notifications/:id` - Atualiza para lido uma notificação

---

**Agora é sair codando :rocket:**

> Se você sentir a necessidade, ou queira modificar este arquivo de `README.md`, você poderá fazer isso caso seja uma boa forma de ser documentado. Presumo que você possa ser muito útil para nos ajudar a deixar ainda mais legível essa documentação para outros desenvolvedores.
