// las entidades hacen una referencia a como vamos a querer grabar en nuestra base de datos
// mi tabla o como se conoce en mongoDB 'coleccion'
// hacen una relacion con las tablas de base de datos 

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
@Schema()
export class Pokemon extends Document {
    // id: string // Mongo me lo da

    @Prop({
        unique: true, index: true
    })
    name: string;

    @Prop({
        unique: true, index: true
    })
    no: number;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon)