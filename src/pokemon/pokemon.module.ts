import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity';
//? import { DolarDiarco, DolarDiarcoSchema } from './entities/dolar-diarco.entity';
//? import { DolarDiarcoJob } from 'job/cron/dolar-diarco.job';
//? import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    //? ScheduleModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: Pokemon.name, schema: PokemonSchema
      },
      //? { name: DolarDiarco.name, schema: DolarDiarcoSchema },
    ])
  ],
  controllers: [PokemonController],
  providers: [PokemonService,
  ],
  //? DolarDiarcoJob
})
export class PokemonModule { }
