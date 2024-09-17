export default class Api {
    constructor(){
        this.publicKey = '605a37f04b3ac4e9735590eae89b9768';
        this.privateKey = '8b0aa59a39e99197edef6f8cf3a94f811c6d4804';
    }
    async inicial() {
        const ts = Date.now(); 
        const hash = CryptoJS.MD5(ts + this.privateKey + this.publicKey).toString(); 
        const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${this.publicKey}&hash=${hash}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data.data.results;
        } catch (error) {
            console.error('Error fetching data:', error);
            return {};
        }
    }

    async searchIndividual(indivi,tipo){
        const ts = Date.now(); 
        const hash = CryptoJS.MD5(ts + this.privateKey + this.publicKey).toString(); 
        let urlId = `https://gateway.marvel.com:443/v1/public/characters/${indivi}?ts=${ts}&apikey=${this.publicKey}&hash=${hash}`;
        let urlNmae = `https://gateway.marvel.com/v1/public/characters?name=${encodeURIComponent(indivi)}&ts=${ts}&apikey=${this.publicKey}&hash=${hash}`;


        if(tipo == 'id'){
            try{
                const reponse = await fetch(urlId);
                const data = await reponse.json();
                return data.data.results;
            }catch(error){
                console.log('Erros fetching data:',error);
                return {};
            }

        }else if(tipo == 'name'){
            try{
                const reponse = await fetch(urlNmae);
                const data = await reponse.json();
                return data.data.results;
            }catch(error){
                console.log('Erros fetching data:',error);
                return {};
            }
        }

    }
}



