import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonModule } from './pokemon/pokemon.module';
import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MongooseModule.forRoot(process.env.MONGODB, {
      dbName: "pokemonsdb"
    }),
    /* Estoy usando Docker Desktop, que es en parte mejor que instalar Mongo porque
    si algun dia necesito desintalarlo, no quedan 'residuos' en la computadora*/
    PokemonModule,
    SeedModule
  ],
})

export class AppModule {
  constructor() {
    console.log(process.env.PORT, process.env.DEFAULT_LIMIT)
  }
}
