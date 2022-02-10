import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type inventoryDocument = InventoryTransition & Document;

@Schema()
export class InventoryTransition {
    @Prop()
    transition: String;

    @Prop()
    location: String;

    @Prop()
    clientLocation: String;

    @Prop()
    feature: String;

    @Prop()
    severity: String;

    @Prop()
    serialNumber: String;

    @Prop()
    hostName: String;

    @Prop()
    IPAdress: String;

    @Prop()
    manufacturer: String;

    @Prop()
    model: String;

    @Prop()
    description: String;

    @Prop()
    switchStack: String;


    @Prop()
    specialInstruction: String;

    @Prop()
    version: Number;

    @Prop()
    active: Boolean;

}

export const inventoryTransitionSchema = SchemaFactory.createForClass(InventoryTransition);