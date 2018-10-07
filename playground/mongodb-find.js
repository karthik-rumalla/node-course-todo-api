const {MongoClient , ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err){
        return console.log('Unable to Connect to mongo db server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').find({
        _id: new ObjectID('5bb97051e153a2292834c22f')
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2)); 
    } , (err) => {
        console.log("Unable to fetch todos",err);
    });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    //   //  console.log(JSON.stringify(docs,undefined,2)); 
    // } , (err) => {
    //     console.log("Unable to fetch todos",err);
    // });

    //db.close();
});