import mongoose from 'mongoose';
const { Schema } = mongoose;

export const clientLocationSchema = new mongoose.Schema({
    client: String,
    location: String,
    active: Boolean,
    version: Number
})