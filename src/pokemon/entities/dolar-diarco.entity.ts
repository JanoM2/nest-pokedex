import { Document } from 'mongoose';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class DolarDiarco extends Document {
    @Prop()
    compra: string;

    @Prop()
    cierre: string;

    @Prop({ default: true })
    active: boolean;
}
export const DolarDiarcoSchema = SchemaFactory.createForClass(DolarDiarco);
