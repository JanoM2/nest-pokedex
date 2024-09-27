import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity';
//? import { DolarDiarco, DolarDiarcoSchema } from './entities/dolar-diarco.entity';
//? import { DolarDiarcoJob } from 'job/cron/dolar-diarco.job';
//? import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    //? ScheduleModule.forRoot(),
    ConfigModule,
    MongooseModule.forFeature([
      {
        name: Pokemon.name, schema: PokemonSchema
      },
      //? { name: DolarDiarco.name, schema: DolarDiarcoSchema },
    ])
  ],
  controllers: [PokemonController],
  providers: [PokemonService],
  exports: [MongooseModule],
  //? DolarDiarcoJob
})
export class PokemonModule { }
