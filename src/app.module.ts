import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),
    /* Estoy usando Docker Desktop, que es en parte mejor que instalar Mongo porque
    si algun dia necesito desintalarlo, no quedan 'residuos' en la computadora*/
    PokemonModule
  ],
})

export class AppModule { }
