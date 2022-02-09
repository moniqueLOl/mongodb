import mongoose from 'mongoose';
const { Schema } = mongoose;

export const locationSchema = new mongoose.Schema({
    site: String,
    cnpj: String,
    cep: String,
    street: String,
    site: String,
    cnpj: String,
    cep: String,
    street: String,
    neighborhood: String,
    number: String,
    city: String,
    state: String,
    country: String,
    ICMS: String,
    municipalRegistration: String,
    stateRegistration: String,
    startTime: String,
    endTime: String,
    storeManager: String,
    cellPhone: String,
    isThirdParty: Boolean,
    version: Number,
    active: Boolean,

})