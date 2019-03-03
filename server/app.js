const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema=require('./schema/schema');
//const mongoose = require('mongoose');

const app = express();

//mongoose.connection.once('open',() =>{
//  console.log('connected');
//});

app.use('/graphql',graphqlHTTP({
schema,
graphiql:true
}));

app.listen(8000,()=>{
  console.log('now listening fr requests on port 8000');
});
