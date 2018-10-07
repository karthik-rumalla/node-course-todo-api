const {MongoClient , ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err){
        return console.log('Unable to Connect to mongo db server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5bb9989b755024cad26bca92')
    // } , {
    //     $set: {
    //         completed: true
    //     }
    //  , {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Properties').findOneAndUpdate({
        _id: new ObjectID('5bb97d796fe0052de4992c89')
    } , {
        $set: {
            name: 'Karthik Rumallas'
        },
        $inc: {
            age: 3
        }
     } , {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //db.close();
});