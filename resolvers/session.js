const _= require('lodash');

module.exports ={
    
    async speakers(session, args, {dataSources}){
        const speakers = await dataSources.speakerAPI.getSpeakers();
        const returns = speakers.filter((speaker)=>{
        return _.filter(session.speakers, {id:speaker.id}).legnth > 0;
        });

        return returns;
    },

}