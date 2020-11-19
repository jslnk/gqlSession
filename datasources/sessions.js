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
        return session[0];
    }
}
module.exports=SessionAPI;

