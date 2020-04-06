# Backend

## :scroll: Tabela de conteúdo

- [Introdução em Backend](#introdução-em-backend)
- [Desenvolvimento em Backend](#desenvolvimento-em-backend)
- <a href="../README.md">Voltar para o principal</a>

---

## Introdução em Backend

Primeiramente cada projeto, possui uma ierarquia de pastas e você deve seguir para não se perder durante o seu desenvolvimento.

````
src/
┣ app/
┃   ┗ models/
┃     ┗ User.js
┣ config
┃   ┗ database.js
┗ database/
     ┣ migrations/
     ┗ index.js
````
Aqui você precisará entender como funciona o fluxo, porque este é o seu ponto de partida para começar a programar em Nodejs.

A pasta **src** será o armazenador do código fonte, pois encapsulará toda a regra de negócio e não somente em um arquivo só arquivo. De início, você irá possuir um arquivo chamado de **src/app.js**, onde foi indicado o inicio das rotas, middlewares e a captação de exeções da aplicação. É importante ressaltar, que a mesma estará rodando na porta `3333`, para caso você esteja usando ela, em algum momento, sugiro parar todos os processos em execução sendo do software node, para não dar nenhum conflito.

**Windows:**
```shell
$ taskkill /f /im node.exe
```

**Linux:**
```shell
$ killall -9 node
```

**Mac:**
```shell
$ killall -9 node
```

Caso não deu certo, siga este tutorial para o encerramento do processo: [Killall node](https://stackoverflow.com/questions/14790910/stop-all-instances-of-node-js-server)

- o arquivo que se encontra no caminho `./nodemon.json`, ele é responsável para configurar a dependência nodemon, caso queira executar um arquivo javascript, ele automaticamente, troca o path `nodemon` para `sucrase-node`, deixando muito mais performático a inicialização do servidor.

- **app** - na pasta app, guardará a regra de negócio da sua aplicação, sendo assim, pode-se conter dentro de pastas: `controllers`, `models`, `middlewares` e entre outros.

- **config** - na pasta config, armazena todo e qualquer tipo de configuração, seja ela do banco de dados, emails, filas, entre outras.

- **database** - na pasta database, está sendo armazenado configurações de conexão entre models e as migrations do banco de dados, ou seja, para esse projeto está sendo usado o `sequelize-cli` para gerenciar e o dialeto é o `postgresql`.

- Já para configurar o sequelize, existe um arquivo chamado `.sequelizerc`, tendo o objetivo de encontrar o caminho para a configuração do banco de dados, dos models, das migrations e seeders!

- O arquivo que se encontra em `~/config/database.js`, ele é responsável para configurar o banco de dados, dizer que dialeto, nome do banco de dados, username, senha e host e algumas definições.

- o arquivo que se encontra no caminho `~/routes.js`, ele é responsável pelas rotas da aplicação, sendo assim muito importante para o processo de manipulação dos dados.

---

## Desenvolvimento em Backend

Dando um introdutório e sabendo o que cada coisa faz e como gerenciar os seus arquivos, aqui você vai partir para o desenvolvimento onde encontrará comandos e códigos, que você poderá usar.

Inicialmente você poderá usar os seguintes comandos para usar na aplicação, onde são gerenciados através do **package.json** na propriedade `scripts`:

- dev - Para quando querer que o servidor fique ouvindo as alterações e seja restartado.
- start - Para que o servidor seja startartado uma vez.
- test - Para caso você esteja realizando testes para a aplicação.

Mas antes de sair codando, é necessário que você instale as dependências que já estão inseridas no projeto.

Neste projeto está sendo utilizado o gerenciador de pacotes [yarn](https://yarnpkg.com/en/docs/install#debian-stable), onde você poderá instalá-lo, para que não crie problemas futuros.

Depois que instalar o gerenciador, execute este comando na pasta do projeto `backend`:

```shell
$ yarn
```

Agora que instalado as dependências, você criará um container no docker, porque foi pensado nisso como forma de aprendizado, caso não possua o [docker](https://docs.docker.com/) instalado em sua maquina, será necessário estar instalado, pois você precisará criar um container assim como foi pensado anteriormente pelo gerenciamento deste projeto.

Com o docker instalado na sua máquina, para criar um container que será usado para este projeto, será feito o seguinte comando:

```shell
$ docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

Você terá como visualizar estes dados com uma ferramenta muito boa para postgres, ela se chama [Postbird](https://electronjs.org/apps/postbird). Baixado e instalado essa ferramenta, você poderá criar seu próprio database para continuar o desenvolvimento.

A senha poderá mudar de acordo com o que você definir.

E antes de inicializar o container será preciso indicar algumas configurações feitas por você no arquivo `.env`, este arquivo você criará na pasta `backend` e deverá ser seguido a mesma configuração que está no arquivo de exemplo: `.env.example`. Lembrando que o arquivo `.env` não poderá entrar neste repositório online, para manter os dados sensíveis da aplicação somente local.

<img src="./assets/postbird.png" alt="Postbird" style="width: 500px;height: 250px;" />

Essa é a cara inicial e agora, você poderá abir uma conexão, no caso o docker que configuramos, você poderá deixar como está, só para o campo de senha, você incluirá a senha que cadastramos e ela se chama `docker`, ou a senha que você possa ter escolhido.

Entrando agora na base de dados, é necessário, criar um novo database para armazenar nossas tabelas, ou migrations que falaremos mais pra frente.

<img src="./assets/create-database.png" alt="Postbird" style="width: 500px;height: 250px;" />

Clicando sobre o botão `Create Database`, você pode perceber que já tenho um banco de dados já criado mas, assim quando iniciar o seu docker não terá ele, daí agora aparecerá uma caixa de mensagem e você poderá colocar o nome `rocketflix` ou o nome que preferir, lembrando que será utilizado no arquivo `.env`, logo falaremos dele, mas só basta isso, não precisa configurar mais nada. Ao criar, essa é a base que você utilizará para o projeto, agora só falta as migrations.

Voltando para o projeto, com um terminal aberto, na pasta `backend` do projeto, você poderá rodar o seguinte comando:

```shell
$ yarn sequelize db:migrate
```

Agora com tudo configurado, você poderá inicializar o desenvolvimento e rodar o servidor localmente, executando:

```shell
$ yarn dev
```

Caso queira criar uma issue específica, para ficar mais fácil deixarei o comando de retirá e adicionar issues ao projeto.

```shell
$ yarn sequelize migration:create --name=create-users
```

Depois do sinal de igual é onde você colocará o nome ideal para a tabela no banco de dados ou adicionar um campo a mais. Logo é importante estar em inglês a criação e edição das migrations.

```shell
$ yarn sequelize db:migrate:undo
```

Para deletar uma migration de cada vez, de acordo com a criação, agora para deletar todas as migrations de uma vez do banco é preciso executar esse comando:

```shell
$ yarn sequelize db:migrate:undo:all
```
Fazendo isso, você poderá dar início a sua jornada de desenvolvimento. Se caso você sofrer com algum erro, ou não conseguir colocar uma certa configuração em seu projeto, sugiro abrir uma [issue](https://github.com/DanielDavidDev/rocketflix/issues), para que se caso outros desenvolvedores sofrerem com este mesmo problema, sejá mais fácil encontrar a solução.

Se você sentir a necessidade, ou queira modificar este arquivo de `README.md`, você poderá fazer isso caso seja uma boa forma de ser documentado. Presumo que você possa ser muito útil para nos ajudar a deixar ainda mais legível essa documentação para outros desenvolvedores.
