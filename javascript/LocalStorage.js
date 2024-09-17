import Api from "./Api.js";

export default class LocalStorage{
    constructor() {
        this.api = new Api();
    }

    async listaInicial(){
        let lista = localStorage.getItem('inicial');
        
        if (lista === null ) {
            const lista2 = await this.api.inicial();
            localStorage.setItem('inicial', JSON.stringify(lista2));
            return lista2;
            
        }else{
            return JSON.parse(lista);
        }
    }
}