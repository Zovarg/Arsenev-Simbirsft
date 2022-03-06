import axios from "axios";
export default class PostService{
    static async getCompetitions(){
        const Token = 'bb82ab2f47034cda9c517dc337746319'
        const response=await axios.get('https://api.football-data.org/v2/competitions/',
            {
            headers: {
                'X-Auth-Token': `${Token}`
                }
            })
        return response;
    }


    static async getTeams(){
        const Token = 'bb82ab2f47034cda9c517dc337746319'
        const response=await axios.get('https://api.football-data.org/v2/teams/',
            {
                headers: {
                    'X-Auth-Token': `${Token}`
                }
            })
        return response;
    }

    static async getCompetitionsId(id,dateStart,dateEnd){

        const Token = 'bb82ab2f47034cda9c517dc337746319'
        const response=await axios.get(`http://api.football-data.org/v2/competitions/${id}/matches`,{
           params:{
                dateFrom:dateStart,
                dateTo:dateEnd
            },
            headers: {
                    'X-Auth-Token': `${Token}`
                }
        })

        return response;
    }

    static async getTeamsId(id,dateStart,dateEnd){

        const Token = 'bb82ab2f47034cda9c517dc337746319'
        const response=await axios.get(`http://api.football-data.org/v2/teams/${id}/matches`,{
            params:{
                dateFrom:dateStart,
                dateTo:dateEnd
            },
            headers: {
                'X-Auth-Token': `${Token}`
            }
        })

        return response;
    }

}