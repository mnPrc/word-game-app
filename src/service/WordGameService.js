import HttpService from "./HttpService";

class WordGameService extends HttpService
{
    async submitWord(word){
        try{
            const data = await this.client.post('/word-game', { word });
            return data.data;
        }catch(error){
            return error.response.data;
        }
    }
}

const wordGameService = new WordGameService();
export default wordGameService;