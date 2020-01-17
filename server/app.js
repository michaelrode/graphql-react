const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect('mongodb://mike:password1@ds263808.mlab.com:63808/gql-ninja');
mongoose.connection.once('open', () => {
  console.log('connected to db');
});
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});
