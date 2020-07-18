const express = require('express');
const app = express();
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const mongoose = require('mongoose');
const uri = require('./config');

const port = process.env.PORT || 3000;
const schema = require('./schema');

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('Database connected'))
.catch(error => console.log(`Error connecting to server: ${error.message}`))

app.use(cors());
app.use('/data', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(port, () => console.log(`Server is listening on ${port}`));