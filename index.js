const {ApolloServer, gql} = require('apollo-server');
const SessionAPI = require('./datasources/sessions');
// fake data const sessions = require('./data/sessions.json');


const SpeakerAPI = require('./datasources/speakers');


 const typeDefs = require('./schema.js');
 const resolvers=require('./resolvers.js');



const dataSources = ()=>({
    sessionAPI :new SessionAPI()
});

const server = new ApolloServer({
    typeDefs, 
    resolvers, 
    dataSources,
    //instrospection:false, //disable schema
    //playground:false //disable playground

});

server
.listen({port: process.env.PORT ||4000})
.then(({url})=>{
    console.log(`graphQL running at ${url}`);
})

