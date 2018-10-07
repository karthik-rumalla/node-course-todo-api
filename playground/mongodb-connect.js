//const MongoClient = require('mongodb').MongoClient;
const {MongoClient , ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err){
        return console.log('Unable to Connect to mongo db server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // } , (err , result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo' , err);
    //     }
    //     console.log(JSON.stringify(result.ops , undefined , 2));
    // });

    //insert new doc into users (name , age , location)

//     db.collection('Properties').insertOne({
//         name: 'Karthik',
//         age: 23,
//         location: 'Syracuse'
//     }, (err, result) => {
//         if(err) {
//             return console.log('Unable to insert properties' , err);
//         }
//         console.log(JSON.stringify(result.ops, undefined , 2));
//     });

//     db.close();
});