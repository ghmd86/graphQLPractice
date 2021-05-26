const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const app = express();
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));
app.listen(3020, () => {
    console.log('Now listening on port 3000');
});