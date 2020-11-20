const _= require('lodash');
const Query = require('./resolvers/query');
const Session = require('./resolvers/session');
const Mutation = require('./resolvers/mutation');

module.exports = {
    Query,
    Session,
    Mutation
    
    // Query:{        
    //     sessions:(parent, args, {dataSources}, info)=>{
    //         return dataSources.sessionAPI.getSessions(args);
    //     },
    //     sessionById:(parent, {id}, {dataSources}, info) =>{
    //         return dataSources.sessionAPI.getSessionByID(id);
    //     }, 
    //     speakers:(parent, args, {dataSources}, info) =>{
    //         return dataSources.speakerAPI.getSpeakers();
    //     },
    //     speakerById:(parent, {id}, {dataSources}, info) =>{
    //         return dataSources.speakerAPI.getSpeakerById(id);
    //     }
    // },

    // Session:{
    //     async speakers(session, args, {dataSources}){
    //         const speakers = await dataSources.speakerAPI.getSpeakers();
    //         const returns = speakers.filter((speaker)=>{
    //         return _.filter(session.speakers, {id:speaker.id}).legnth>0;
    //         });

    //         return returns;
    //     }
    // }
  };
  