module.exports={         
    sessions:(parent, args, {dataSources}, info)=>{
        return dataSources.sessionAPI.getSessions(args);
    },
    sessionById:(parent, {id}, {dataSources}, info) =>{
        try{
            return dataSources.sessionAPI.getSessionByID(id);
        }catch(error){
            return{code:'ERROR', message:'An error occurred', token:'adsfkjsdlfkjsadlfk'};
        }
        
    }, 
    speakers:(parent, args, {dataSources}, info) =>{
        return dataSources.speakerAPI.getSpeakers();
    },
    speakerById:(parent, {id}, {dataSources}, info) =>{
        return dataSources.speakerAPI.getSpeakerById(id);
    }
}
