const {MongoClient , ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err){
        return console.log('Unable to Connect to mongo db server');
    }
    console.log('Connected to MongoDB server');

    // delete Many
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
    //         console.log(result.result);
    // });

    //delete One
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });

    //find one and delete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });

    //db.close();
});