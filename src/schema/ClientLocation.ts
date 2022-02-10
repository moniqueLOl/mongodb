import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClientDocument = ClientLocation & Document;


@Schema()
export class ClientLocation {
    @Prop()
    client: String;

    @Prop()
    location: String;

    @Prop()
    active: Boolean;

    @Prop()
    version: Number;
};

export const clientLocationSchema = SchemaFactory.createForClass(ClientLocation);
