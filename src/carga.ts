import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClientDocument, ClientLocation } from "./schema/ClientLocation";
import { inventoryDocument, InventoryTransition } from './schema/InventoryTransition';
import { Location, LocationDocument } from './schema/Location';

@Injectable()
export class mongoDB {
    constructor(
        @InjectModel(ClientLocation.name) private _clientLocationModel: Model<ClientDocument>,
        @InjectModel(InventoryTransition.name) private _inventoryTransitionModel: Model<inventoryDocument>,
        @InjectModel(Location.name) private _locationModel: Model<LocationDocument>
    ) { }

    async update(id) {
        const inventoryTransition = await this._inventoryTransitionModel.findOne({ _id: id });
        const clientLocation = await this._clientLocationModel.findOne({ _id: id });

        var inventoryTransitionList = []

        inventoryTransitionList = inventoryTransition.location.push()



        inventoryTransitionList.foreach(element => {

            clientLocation.location === element.id

            inventoryTransition.populate('location')

        })
    }
}