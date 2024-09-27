import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response.interface';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
// import { PokemonService } from 'src/pokemon/pokemon.service';



@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) { }

  async executeSeed() {
    await this.pokemonModel.deleteMany({});

    const data  = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650')
    const pokemonToInsert: { name:string, no:number }[] = [];

    data.results.forEach(async ({ name, url }) => {
      const segments = url.split("/");
      const no: number = +segments[segments.length - 2];
      
      pokemonToInsert.push({ name, no })
    })

    await this.pokemonModel.insertMany(pokemonToInsert)

    return 'Seed executed'
  }
}

//? UNA MANERA DE HACERLO ES ESTA  
// async executeSeed() {
  //   await this.pokemonModel.deleteMany({});
  //   const { data } = await this.axios.get<PokeResponse>(`https://pokeapi.co/api/v2/pokemon?limit=10`)

  //   const insertPromisesArray = [];
  //   data.results.forEach(async ({ name, url }) => {
  //     const segments = url.split("/");
  //     const no: number = +segments[segments.length - 2];

  //     insertPromisesArray.push(this.pokemonModel.create({ name, no }))
  //     // const pokemon = await this.pokemonModel.create({ name, no })
  //   })
  
  //   await Promise.all(insertPromisesArray);
  //   return 'Seed executed'
  //   // return data.results;
  // }