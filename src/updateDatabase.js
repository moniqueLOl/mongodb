// const { ObjectId } = require('mongodb')

// const mongodb = require ('mongodb').MongoClient
// const url ='mongodb://10.214.10.56:27017/brain?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'

// mongodb.connect(url,(erro,banco) => {
//     const dbo = banco.db('test')
//     const colecao = 'InventoryTransitions'


//     // const query = {_id : ObjectId('6203f5f014d4e2af5f6c9d13')}
//     dbo.collection(colecao).aggregate([
//         {$lookup:
//         {
//         from: "clientLocation",
//         localField: "location",
//         foreignField: "location",
//         as: "locationFinal"
//         }
//         }
//         ]).then((result) => {
//             console.log(result);
//         }).catch((error) => {
//             console.log(error);
//         })
//         banco.close()
//     })
// }