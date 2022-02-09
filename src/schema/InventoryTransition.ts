import mongoose from 'mongoose';
const { Schema } = mongoose;

export type InventoryDocument = InventoryTransiton & Document;


export const inventortTransitionSchema = new mongoose.Schema({
    transition: String,
    clientLocation: String,
    feature: String,
    severity: String,
    serialNumber: String,
    hostName: String,
    IPAdress: String,
    manufacturer: String,
    model: String,
    description: String,
    switchStack: String,
    specialInstruction: String,
    version: Number,
    active: Boolean

});