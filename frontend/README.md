# Frontend

## :scroll: Tabela de conteúdo

- [Introdução em Frontend](#introdução-em-frontend)
- [Desenvolvimento em Frontend](#desenvolvimento-em-frontend)
- <a href="../README.md">Voltar para o principal</a>

---

## Introdução em Frontend

Primeiramente cada projeto, possui uma ierarquia de pastas como vimos no backend e você deve seguir para não se perder durante o seu desenvolvimento.

````
public
┣ index.html
src
┣ components
┃   ┗ Header
┣ pages
┃   ┣ _layouts
┃   ┗ SignIn
┣ routes
┗ styles
     ┗ global.js
````

Aqui você precisará entender como funciona o fluxo, porque que este é o seu ponto de partida para começar a programar em ReactJs.

Primeiramente você encontrará a pasta **public**, para muitos essa é uma pasta um tanto que desnecessária, mas ela concerteza tem muito o que precisamos saber, sendo assim, uma referência do início da aplicação. Se você abrir o arquivo `index.html`, você encontrará um HTML, simples que no corpo dele terá uma tag `div` com uma classe `root`, essa classe é onde o seu código em React será importado, então se você achou que não é importante ele pode dizer muita coisa sobre.

Inicialmente, foi definido que não será utilizado PWA para este projeto, por isso foi deixado bem configurado e simplificado o arquivo em questão.

Agora na pasta **src** será o armazenado todo código fonte, pois encapsulará todas as telas que terão neste projeto, tendo configurações também e componentes que serão adicionados com o tempo.

- o arquivo que se encontra no caminho `./jsconfig.json`, ele é responsável para configurar a parte de importação de arquivos dentro do projeto, sendo assim, muito ruim estar colocando vários `../../` para voltar pastas. Então, foi criado essa funcionalidade para que a referência `src`, onde será armazendado o código, será o root path, para importação de arquivos.

- **App.js** - este arquivo é responsável para encapsular as rotas e configurações adicionais ao projeto.

- **components** - na pasta components, ele basicamente encapsula os componentes que você criará para o projeto, sendo assim muito importante.

- **pages** - na pasta pages, basicamente é armazenado as telas e layouts da aplicação.

- **routes** - na pasta routes, é configurado as rotas privadas e públicas da aplicação, aqui é onde você incluirá as pages em rotas.

- **styles** - na pasta styles, basicamente são os estilos globais que a aplicação terá, ou seja, caso, você utilize tal estilização demais em um elemento, você poderá incluir no arquivo `global.js`, as estilizações adicionais.

---

## Desenvolvimento em Frontend

Dando um introdutório e sabendo o que cada coisa faz e como gerenciar os seus arquivos, aqui você vai partir para o desenvolvimento onde encontrará comandos e códigos, que você poderá usar.

Inicialmente você poderá usar os seguintes comandos para usar na aplicação, onde são gerenciados através do **package.json** na propriedade `scripts`:

- start - Para que o front seja startartado.

Mas antes de sair codando, é necessário que você instale as dependências que já estão inseridas no projeto.

Neste projeto está sendo utilizado o gerenciador de pacotes [yarn](https://yarnpkg.com/en/docs/install#debian-stable), onde você poderá instalá-lo, para que não crie problemas futuros.

Depois que instalar o gerenciador, execute este comando na pasta do projeto `frontend`:

```sh
$ yarn
```

Agora que instalado as dependências, você iniciará o container, que já foi instalado logo na sessão [desenvolvimento em backend](#desenvolvimento-em-backend) se caso não fez isso, pesso para que volte duas casas e faça o processo. Exucutando o comando:

```sh
$ docker start database
```

Você precisa startar o backend, mesmo ainda em desenvolvimento, você sairá da pasta `frontend` e entrará na pasta `backend`, para ficar mais fácil, deixarei um comando pronto se estiver na pasta informada:

```sh
$ cd .. && cd backend/ && yarn
```

Isso fará com que instale as dependências que estão no projeto, agora você pode incializar o container e a api.

Mas antes de inicializar o container e a api será preciso indicar algumas configurações feitas por você no arquivo `.env`, este arquivo você criará na pasta `backend` e deverá ser seguido a mesma configuração que está no arquivo de exemplo `.env.example`. Lembrando que o arquivo `.env` ele, não poderá entrar neste repositório online, para manter os dados sensíveis da aplicação somente local.

Logo após a edição do arquivo colocando as suas configurações da aplicação, você poderá inicializar o container do docker e a api:

```sh
$ docker start database && yarn dev
```

Agora com o docker rodando, você poderá inicializar o desenvolvimento do frontend, seguindo um layout que ainda não foi desenvolvido, caso queira fazer, é só você abrir uma issue e commitar as alterações, elas serão primeiramente apreciadas e logo depois importada aqui para que todos que estiverem desenvolvendo o frontend, consiga seguir um layout padrão.

Lembrando se caso você sofrer com algum erro, ou não conseguir colocar uma certa configuração em seu projeto, sugiro abrir uma [issue](https://github.com/DanielDavidDev/rocketflix/issues), para que se caso outros desenvolvedores sofrerem com este mesmo problema, sejá mais fácil encontrar a solução.

Se você sentir a necessidade, ou queira modificar este arquivo de `README.md`, você poderá fazer isso caso seja uma boa forma de ser documentado. Presumo que você possa ser muito útil para nos ajudar a deixar ainda mais legível essa documentação para outros desenvolvedores.
