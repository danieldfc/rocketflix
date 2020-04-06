# :rocket: RocketFlix - [Rocketseat](https://www.github.com/Rocketseat)

<br/>

<p align="center" style="font-weight: bold; font-size: 24px">
Este repositório tem o objetivo de criar uma plataforma de videos, em Node.Js e ReactJs, para a empresa! 🚀
</p>

<hr />

## :rocket: Visão geral

Este projeto tem um papel fundamental para a aprendizagem entre desenvolvedores e é para isso que existe a comunidade. Foi pensado exclusivamente para construirmos juntos um ambiente bem parecido com o aplicativo Netflix, com funcionalidades de videos lançados no momento, playlists, notificações, testes automatizados e muitas outras coisas que você poderá aplicar durante o seu desenvolvimento.

:construction: **Backend** - Ele será responsável de entregar rotas de acesso ao frontend, e se caso já foi desenvolvido, não esquenta, este repositório é público e sempre precisa de melhorias, com certeza é uma boa você estar visualizando de forma geral, para poder entender e saber onde pode melhorar.

  - :vertical_traffic_light: **rotas** - Agora,será mostrado para você as rotas que serão e que já foram feitas neste projeto, peço para que todos que sentirem a necessidade de estar modificando ou incluindo alguma rota, peço para que assim possa documentar.

    - [x] `POST http://localhost:3333/users` - Cria um novo usuário

    - [x] `POST http://localhost:3333/sessions` - Cria uma nova sessão para o usuário

    **Rotas que precisa estar autenticado**

    - :person_with_blond_hair: Users

      - [x] `PUT http://localhost:3333/users` - Atualiza o usuário logado

    - :framed_picture: Files

      - [x] `POST http://localhost:3333/files` - Inclue arquivos de imagem para avatar e vídeos

    - :movie_camera: Videos

      - [x] `GET http://localhost:3333/videos` - Lista todos os vídeos

      - [x] `POST http://localhost:3333/videos` - Cria um vídeo

      - [x] `PUT http://localhost:3333/videos/:id` - Atualiza um vídeo

      - [x] `DELETE http://localhost:3333/videos/:id` - Deleta um vídeo

    - :memo: Tags

      - [ ] `GET http://localhost:3333/tags` - Lista tags

      - [ ] `GET http://localhost:3333/tags/:name_tag/videos` - Lista vídeos daquela tag

      - [ ] `POST http://localhost:3333/tags` - Cria tag

      - [ ] `PUT http://localhost:3333/tags/:id` - Atualiza uma tag

      - [ ] `DELETE http://localhost:3333/tags/:id` - Deleta uma tag

    - :pushpin: Notificação

      - [ ] `GET http://localhost:3333/notifications` - Lista notificações

      - [ ] `PUT http://localhost:3333/notifications/:id` - Atualiza para lido uma notificação

:cookie: **Frontend** - Ele é responsável para mostrar de maneira visível ao usuário, dados que vem do backend. Logo é necessário estar totalmente seguro, para que não possa mostrar dados senvíveis do usuário.

  - :vertical_traffic_light: **rotas** - Assim como no backend, será mostrado a navegação entre rotas. Então, de forma bem breve essas são as rotas que terão no projeto `frontend` e assim como foi dito no `backend`, você poderá adicionar uma nova rota e adicionar aqui neste readme.

    - [ ] `http://localhost:3000/` - Login do usuário.

    - [ ] `http://localhost:3000/register` - Registrar um novo usuário.

    **Rotas que precisa estar autenticado**

      - [ ] `http://localhost:3000/dashboard` - Aqui é onde terá os vídeos listados aleatoriamente, ou seja, o usuário visualizará todos os vídeos independente da tag, logo ele poderá adicionar. É bom colocar a lista de todas as tags, para o usuário poder ver separadamente cada uma delas. É importante ressaltar, que será implementado notificações, então terá que ter um botão em algum local, para que possa fornecer esses dados.

      - [ ] `http://localhost:3000/account` - Aqui é a página do usuário, caso ele queira modificar seus dados.

      - :clapper: Videos

        - [ ] `http://localhost:3000/journey/videos/` - Visualizar todos os vídeos dos mais recentes, aos mais antigos.

      - :pencil: Tags

        - [ ] `http://localhost:3000/journey/:nameTag/videos` - Listar vídeos dessa tag

        - [ ] `http://localhost:3000/journey/:nameTag/videos/:titleVideo` - Exibe um vídeo

      - :cd: Playlists

        - [ ] `http://localhost:3000/jorney/playlists` - Visualiza todas as playlists

        - [ ] `http://localhost:3000/jorney/playlists/:namePlaylist` - Visualiza uma playlist específica

        - [ ] `http://localhost:3000/jorney/playlists/new` - Cria uma nova playlist

        - [ ] `http://localhost:3000/jorney/playlists/:namePlaylist/edit` - Edita uma playlist específica

````
Nota:

  É importante ressaltar que este projeto, não tem o objetivo de ir para a produção, caso você queira colocar, é necessário que você fale diretamente com a Rocketseat. Não nos responsabilizamos por nada que você faça.
````

<hr />

## :scroll: Tabela de conteúdo

- [:rocket: Visão geral](#rocket-visão-geral)
- [:scroll: Tabela de conteúdo](#scroll-tabela-de-conteúdo)
- [:wrench: Ferramentas](#wrench-ferramentas)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [:fire: Avançadas](#fire-avançadas)
  - [Eslint](#eslint)
  - [Prettier](#prettier)
  - [Editorconfig](#editorconfig)
- [:star2: Contribuição](#star2-contribuição)
- [:clipboard: Licença](#clipboard-licença)

<hr />

## :wrench: Ferramentas

As ferramentas que serão usadas e aplicadas durante o desenvolvimento, serão diversas e idependentes para cada visão. Para o backend usaremos o `Node.js`, ele hoje sendo umas das referências. Já para o frontend usaremos o `ReactJs`, por ser uma plataforma bem favorável a nossa aplicação, será de grande ajuda o desenvolvimento nessa ferramenta do `React`.

<hr />

## Backend

A documentação para o mesmo está neste <a href="./backend/README.md">README</a>

<hr />

## Frontend

A documentação para o mesmo está neste <a href="./frontend/README.md">README</a>

<hr />

## :fire: Avançadas

Foi separado este tópico, porque basicamente isso funciona para qualquer tipo de visão, onde estará o backend e o frontend. Essas funcionalidades serão descritas rapidamentes, pois elas não são um requisito para o projeto, mas para uma boa usabilidade e ter um padrão único para o projeto, é interessante passar um tópico justamente para falar de cada uma delas.

### Eslint

O eslint basicamente, ele gerencia melhor o código para seguir um padrão mais aceito e marcar erros onde você poderá modificar para uma forma melhor de usar. Ele tem uma [extenção](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) no [vscode](https://code.visualstudio.com/#alt-downloads), se caso não ter este software, recomendo estar utilizando ele, pois ajudará muito no decorrer de seu desenvolvimento, mas se você já tiver com outro editor em sua máquina e tiver um costume já com ele, não terá maiores problemas, mas apartir daqui não funcionará as configurações do editor que mostrarei aqui.

Para melhor configuração dessa ferramenta e integrar bem ao editor, você poderá colocar as seguintes configurações no arquivo `settings.json`, que você encontrará, clicando em `CTRL + SHIFT + P`, com isso abrirá um input de texto logo no header do editor, daí então, você incluirá o seguinte: `>Preferences: Open Settings (JSON)`, com isso abrirá suas configurações e incluirá no Json, o seguinte:

```json
{
  "editor.formatOnSave": false,

  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    {
      "language": "javascript",
      "autoFix": true
    },
    {
      "language": "javascriptreact",
      "autoFix": true
    }
  ]
}
```

### Prettier

Esta ferramenta se chama `prettier` e também possui uma [extenção](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), sendo de grande importância, estar instalando também, para que ele possa arrumar o seu código e assim ter uma integração com o eslint, tendo mais compatibilidades e metodologias aplicadas em seu projeto.

Ele tem uma configuração no vscode que você poderá adicionar também:

```json
{
  "prettier.eslintIntegration": true,
}
```

### Editorconfig

Essa Ferramenta é uma ótima opção caso você esteja lidando com outras devs que usam outros editores, ele basicamente configura entre todos os editores a forma de como são editados os arquivos, em questão de espaçamento, se pula uma linha no final o código e entre outras coisas que você pode estar olhando a documentação. Ele possui uma [extensão](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig), para que ao clicar com o botão direito do mouse no navbar onde não possui arquivos mostre uma opção que gere um arquivo de configuração do mesmo.

<img src="./assets/generate_editorconfig.png" style="width: 170px;height: 350px;" />

As configurações usadas nestes projetos como um todo são:

```
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

## :star2: Contribuição

Antes de sair codando, você precisa fazer um passo a mais para se registrar nesse projeto como contribuidor :)

Na raiz do projeto você vai encontrar o arquivo `package.json` e nele, você irá colocar as seguintes configuraçõe na configuração `contributors`, depois dos seus colegas de equipe: nome, url e email(opcional).

*Ex.:*
```json
"contributors": [
  {
    "name": "seu nome",
    "email": "seu email",
    "url": "htpps://github.com/seu_usuario"
  }
]
```

É importante que você não mexa nos nomes de seus colegas, caso isso aconteça, **não será aceito a pull request**.


Contribuições são o que fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer, será **muito apreciada**.

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/FeatureIncrivel`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Adicionando uma Feature incrível!`)
5. Faça o Push da Branch (`git push origin feature/FeatureIncrivel`)
6. Abra uma Pull Request

[Para mais, veja também nossa wiki clicando aqui!](https://github.com/DanielDavidDev/rocketflix/wiki)

# :clipboard: Licença

MIT
