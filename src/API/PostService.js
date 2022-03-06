import axios from 'axios'
export default class PostService {
    /*Запрос для получения списка команд*/
    static async getCompetitions (){
        const Token = process.env.REACT_APP_API_KEY
        const response = await axios.get('https://api.football-data.org/v2/competitions/',
            {
            headers: {
                'X-Auth-Token': `${Token}`
                }
            })
        return response
    }
    /*Запрос для получения списка команд*/
    static async getTeams (){
        const Token = process.env.REACT_APP_API_KEY
        const response = await axios.get('https://api.football-data.org/v2/teams/',
            {
                headers: {
                    'X-Auth-Token': `${Token}`
                }
            })
        return response
    }
    /*Запрос для получения списка матчей лиг*/
    static async getCompetitionsId (id,dateStart,dateEnd){

        const Token = process.env.REACT_APP_API_KEY
        const response = await axios.get(`http://api.football-data.org/v2/competitions/${id}/matches`,{
           params:{
                dateFrom:dateStart,
                dateTo:dateEnd
            },
            headers: {
                    'X-Auth-Token': `${Token}`
                }
        })

        return response
    }

    /*Запрос для получения списка матчей команд*/
    static async getTeamsId(id,dateStart,dateEnd){

        const Token = process.env.REACT_APP_API_KEY
        const response = await axios.get(`http://api.football-data.org/v2/teams/${id}/matches`,{
            params:{
                dateFrom:dateStart,
                dateTo:dateEnd
            },
            headers: {
                'X-Auth-Token': `${Token}`
            }
        })

        return response
    }

}