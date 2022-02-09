//Isso tudo nao funciona
//typegoose da erro em returnModelType

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { inventortTransitionSchema, InventoryDocument } from "./schema/InventoryTransition";

// import { Injectable } from "@nestjs/common";
// import { InjectModel } from "@nestjs/mongoose";
// import { inventortTransitionSchema } from "./schema/InventoryTransition";

// @Injectable()
// export class mongodbService {
//     constructor(
//         @InjectModel(inventortTransitionSchema) private _inventoryTransition: ReturnModelType<typeof Technology>,
//         @InjectModel(History) private _history: ReturnModelType<typeof History>,
//         private _historyService: HistoryService
//     ) { }

//nao vai funciona
// import { MongoClient } from "mongodb";

// const url = 'mongodb://10.214.10.56:27017/brain?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';


// const client = new MongoClient(url)
// async function run() {
//     try {
//         await client.connect();
//         const database = client.db("test");
//         const inventoryTransition = database.collection("inventoryTransitions");
//     }
// }


@Injectable()
export class mongoDB {
    constructor(
        @InjectModel(inventortTransitionSchema) private _inventoryTransitionModel: Model<InventoryDocument>}
    ) { }

    
}