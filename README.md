# Spotyhot - Testing for Job

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Para instalar o projeto
Entre no diretório root e rode o comendo:

### `yarn install`
Depois para iniciar a aplicação rode o comando
## Modo de usar
Para utilizar o sistema você deve, criar algumas contas e pegar o ID Client de acesso para as API.

## Configurando acesso para API do Spotify
Para pegar o tolken do spotify, você precisa criar uma conta no De Developer Spotify https://developer.spotify.com/
Feito isso vá para Dash Board.Login e Click em Create An App.
Copie seu Client ID e também configure sua Redirect URIs, que fica no menu EDIT SETTINGS.
Após isso entre na pasta raiz e cole todos esses dados no arquivo .env.local.

## Configurando o Spotify API
Para pegar o tolken do spotify, você precisa criar uma conta no De Developer Spotify: https://developer.spotify.com/
Feito isso vá para Dash Board.Login e Click em Create An App.
Copie seu Client ID e também configure sua Redirect URIs colocando http://localhost:3000/callback, entre no menu EDIT SETTINGS.
Após isso entre na pasta raiz e cole todos esses dados no arquivo .env.local.

## Configurando acesso para API Weather Stack
Para configurar o acesso a API que mede a temperatura você precisa apenas criar uma conta no site da Wether Stack: https://weatherstack.com/ copie e cole seu tolken id no arquivo env.local, localizado na pasta raiz do projeto.

## Pronto para decolar?
Feito isso rode o comando abaixo, se tudo correr bem você vai ter acesso no localhost. 

### `yarn start`
Após entre digite a url localhost:3000.\
Para abrir [http://localhost:3000](http://localhost:3000) veja no brouwser logo em seguida.

## Para testar
Para testar rode o comando

### `yarn test`
The page will reload if you make edits.\
You will also see any lint errors in the console.

## Sobre o funcionamento
O sistema é um MVP simples, com objetico de mostrar a playlist mais indicada para o tempo.
Se o dia estiver quente ele vai mostrar a Playlist para dias quentes.
E se estiver frio ele mostra a Playlist para dias frio.

## Parte técnica
Essa aplicação foi feita com React, utilizando Css e Material UI para Interface do usuário.
Toda playlist é salva no seu perfil criado para utilizar a plataforma.
Para test foi usado a Library Testing.
E APi foi usado as APis do Spotify e para tempo a API do Weather Stack.

