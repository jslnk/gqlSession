//this is for any database SQL, MongoDB...

const sessions = require('../data/sessions.json');
const {DataSource} =require('apollo-datasource');
const _ = require('lodash');

class SessionAPI extends DataSource{
    constructor(){
        super();
    }

    initialize(conifg){

    }

    getSessions( args){
        return  _.filter(sessions, args )
    }

    getSessionByID(id){
        const session =_.filter(sessions, {id : parseInt(id)});
        //console.log(session);
        return session[0];
    }

    toggleFavoriteSessionAAA(id){
        const session =_.filter(sessions, {id : parseInt(id)});
        session[0].favorite = !session[0].favorite;
        return session[0];
    }

    addSession(session){
        session.id = 12;
        sessions.push(session);
        //console.log(session);
        return session;
    }
}
module.exports= SessionAPI;

