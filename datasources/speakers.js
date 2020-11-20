//this is for rest api
const {RESTDataSource} = require('apollo-datasource-rest');

class SpeakerAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = 'http://localhost:3000/speakers'; // this is seaker API URL
    }

    async getSpeakerById(id){
        const data = await this.get(`/${id}`);
        return data;
    }

    async getSpeakers(){

        const data = await this.get('/');
        return data;

    } 
}

module.exports = SpeakerAPI;