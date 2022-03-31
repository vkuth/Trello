import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import "reflect-metadata";
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const options = new DocumentBuilder().addBearerAuth();
  const config = new DocumentBuilder()
    .setTitle('TRELLO example')
    .setDescription('The Trello API description')
    .setVersion('1.0')
    .addTag('TRELLO')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
