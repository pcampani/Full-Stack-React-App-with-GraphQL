const express = require('express');
const app = express();
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;
const schema = require('./schema');

mongoose.connect('mongodb://admin:admin1234@ds161426.mlab.com:61426/games', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('Database connected'))
.catch(error => console.log(`Error connecting to server: ${error.message}`))

app.use(cors());
app.use('/data', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(port, () => console.log(`Server is listening on ${port}`));