# Registro e Login - Autenticação JWT e Passport - NestJs + MongoDB

Boilerplate de Registro e Login de usuário usando [NestJs](https://github.com/nestjs/nest/) conectado ao [MondoDB](https://github.com/mongodb/mongo).<br><br>
Para a autenticação é usado o [JWT](https://jwt.io/) com [Passport](http://www.passportjs.org/)
.

## Instalação

Usando a linha comando do OS - Windows - Mac - Linux

Clone este repositório:
```js
git clone https://github.com/eduardokeneth/autentication-jwt-passport-nestjs
```

Execute um npm/yarn install para instalar as dependências do package.json
```js
yarn install
```

Rode npm/yarn run start para rodar a aplicação
```js
yarn run start
```

### Substituir as chaves de configuração em ./config/default.ts

```typescript
export default {
  HOST: 'http://localhost',
  PORT: 8080,
  MONGO_URI: 'mongo uri aqui',
  JWT_KEY: 'password aqui',
};

```

### Documentação API - Swagger

```typescript
 const swaggerOptions = new DocumentBuilder()
     .setTitle('Project Server')
     .setDescription('API Documentation')
     .setVersion('1.0.0')
     .setHost(hostDomain.split('//')[1])
     .setSchemes(AppModule.isDev ? 'http' : 'https')
     .setBasePath('/api')
     .addBearerAuth('Authorization', 'header')
     .build();
```

## Compatibilidade
Versões iguais ou superiores

Nodejs : v10.13.0 &nbsp;&nbsp;/&nbsp;&nbsp; NPM : 6.5.0
NestJs : ^5.4.0 &nbsp;&nbsp;/&nbsp;&nbsp; Mongoose : ^5.4.0 &nbsp;&nbsp;/&nbsp;&nbsp;

License
--------

[MIT License](https://github.com/eduardokeneth/autentication-jwt-passport-nestjs/blob/master/LICENSE.md) © Eduardo Keneth
