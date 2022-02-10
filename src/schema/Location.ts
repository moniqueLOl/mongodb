import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LocationDocument = Location & Document;

@Schema()
export class Location {
    @Prop()
    site: String;

    @Prop()
    cnpj: String;

    @Prop()
    cep: String;

    @Prop()
    street: String;

    @Prop()
    neighborhood: String;

    @Prop()
    number: String;

    @Prop()
    city: String;

    @Prop()
    state: String;

    @Prop()
    country: String;

    @Prop()
    ICMS: String;

    @Prop()
    municipalRegistration: String;

    @Prop()
    stateRegistration: String;

    @Prop()
    startTime: String;

    @Prop()
    endTime: String;

    @Prop()
    storeManager: String;

    @Prop()
    cellPhone: String;

    @Prop()
    isThirversiondParty: Boolean;

    @Prop()
    version: Number;

    @Prop()
    active: Boolean;
}

export const LocationSchema = SchemaFactory.createForClass(Location);