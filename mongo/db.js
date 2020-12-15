const mongoose = require('mongoose');
const databaseConfig = require('../database-config.json');

mongoose.connect(databaseConfig.ConnectionString, function(err){
    if(err) return console.log(err);
    console.log('successfully connected to mongo db!');
});