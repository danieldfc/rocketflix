# :cookie: Frontend

Será responsável para mostrar de maneira visível ao usuário, dados que vem do backend. Logo é necessário estar totalmente seguro, para que não possa mostrar dados senvíveis do usuário.

## :scroll: Tabela de conteúdo

- [Executar](#hammer-executar)
- [Rotas](#vertical_traffic_light-rotas)
- <a href="../../README.md">Voltar para o principal</a>

---

## :hammer: Executar

Dando um introdutório e sabendo o que cada coisa faz e como gerenciar os seus arquivos, aqui você vai partir para o desenvolvimento onde encontrará comandos e códigos, que você poderá usar.

Inicialmente você poderá usar os seguintes comandos para usar na aplicação, onde são gerenciados através do **package.json** na propriedade `scripts`:

- **yarn start** - Para que seja inicializado.
- **yarn build** - Para criar a build da aplicação.
- **yarn test** - Para que seja testado alguma funcionalidade (inicialmente, ão pensamos em criar testes para o frontend, então, caso seja uma funcionalidade bem mais específica, fique a vontade para testar :smiley:).

Quando você quiser utilizar recursos da API, então você precisará estar com o seu banco de dados local rodando e a aplicação `backend`, se estiver utilizando o docker e o nome do seu banco for `database`, tenho um comando para facilitar, mas caso for outro nome do container é só modificar:

```sh
$ docker start database && cd ../backend && yarn dev:server
```

Agora com o docker rodando, você poderá inicializar o desenvolvimento do frontend, seguindo o [layout](https://www.figma.com/file/frddCP6g2InXFPU4w2LSxC/F%C3%B3rum?node-id=0%3A1) que ainda está sendo desenvolvido, caso queira criar junto conosco, *faça as honras*. Peça a permissão, do administrador `danieldfc`, para que seja dado o acesso.

---

## :vertical_traffic_light: Rotas

Assim como no backend, será mostrado a navegação entre rotas. Então, de forma bem breve essas são as rotas que terão no projeto `frontend`.

  - [ ] `http://localhost:3000/` - Login do usuário.
  - [ ] `http://localhost:3000/register` - Registrar um novo usuário.

  **Rotas que precisa estar autenticado**

  - [ ] `http://localhost:3000/dashboard` - Aqui é onde terá os vídeos listados aleatoriamente, ou seja, o usuário visualizará todos os vídeos independente da tag, com alguma paginação, logo ele poderá adicionar. É bom colocar a lista de todas as tags, para o usuário poder ver separadamente cada uma delas. É importante ressaltar, que será implementado notificações, então terá que ter um botão em algum local, para que possa fornecer esses dados.

  - [ ] `http://localhost:3000/account` - Aqui é a página do usuário, caso ele queira modificar seus dados.

  - :clapper: Videos
    - [ ] `http://localhost:3000/journey/videos` - Visualizar todos os vídeos dos mais recentes, aos mais antigos.

  - :pencil: Tags
    - [ ] `http://localhost:3000/journey/:nameTag/videos` - Listar vídeos dessa tag
    - [ ] `http://localhost:3000/journey/:nameTag/videos/:titleVideo` - Exibe um vídeo

---

**Agora é sair codando :rocket:**

> Se você sentir a necessidade, ou queira modificar este arquivo de `README.md`, você poderá fazer isso caso seja uma boa forma de ser documentado. Presumo que você possa ser muito útil para nos ajudar a deixar ainda mais legível essa documentação para outros desenvolvedores.
