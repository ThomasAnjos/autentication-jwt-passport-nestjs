import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './shared/filter/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // http://localhost:8080 : https://mydomain.com.br
  const hostDomain = AppModule.isDev ? `${AppModule.host}:${AppModule.port}` : AppModule.host;

  const swaggerOptions = new DocumentBuilder()
    .setTitle('Project Server')
    .setDescription('API Documentation')
    .setVersion('1.0.0')
    .setHost(hostDomain.split('//')[1])
    .setSchemes(AppModule.isDev ? 'http' : 'https')
    .setBasePath('/api')
    .addBearerAuth('Authorization', 'header')
    .build();

  const swaggerDoc = SwaggerModule.createDocument(app, swaggerOptions);

  app.use('api/docs/swagger.json', (req, res) => {
    res.send(swaggerDoc);
  });

  const document = SwaggerModule.createDocument(app, swaggerOptions);

  SwaggerModule.setup('/api/docs', app, document, {
    swaggerUrl: `${hostDomain}/api/docs/swagger.json`,
    explorer: true,
    swaggerOptions: {
      docExpansion: 'list',
      filter: true,
      showRequestDuration: true,
    },
  });
  app.setGlobalPrefix('api');
  app.useGlobalFilters(new HttpExceptionFilter());

  // process.env.PORT || 3001
  await app.listen(AppModule.port);
}

bootstrap();
