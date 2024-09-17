import Interface from './Interface.js';
import Api from './Api.js';
import LocalStorage from './LocalStorage.js';


class Main{
    constructor(){
        this.interface = new Interface();
        this.api = new Api();
        this.localStorage = new LocalStorage();
        this.events();
    }

    events(){
        document.addEventListener('DOMContentLoaded',()=>{
            this.gerarInit();
            this.clicarImagem();
            this.search();

        })
    }

    search(){
        let lupa = document.querySelector(".fa-magnifying-glass");
        let input = document.querySelector('#search');
        let container = document.querySelector('.containerGrid');

        const pesquisar = async () =>{
            let inputValue = input.value;
            let nome =await this.api.searchIndividual(inputValue,'name');
            if(nome.length === 0){
                console.log('hahaha')
                alert(`Não foi encontrado o pesonagem "${inputValue}"`)
            }else{
                await this.interface.gerarCard(container,nome)
            }
        }

        lupa.addEventListener('click',pesquisar);
        input.addEventListener('keydown',(event)=> {
            if(event.key === 'Enter'){
                pesquisar();
            }
        })
    }



    async gerarInit(){
        const listaInit = await this.localStorage.listaInicial();
        const container = document.querySelector(".containerGrid");
        this.interface.gerarCard(container,listaInit);
    }


    clicarImagem(){
        let containerEvents = document.querySelector('.containerGrid');
        let containerVisivel = document.querySelector('.informaçôesCards');

        const abrirImagem = ()=>{
            containerEvents.addEventListener('click', async (event)=>{
                const target = event.target;
                let div = target.closest('div');
                if(div.classList.contains('cards')){
                    console.log(div)
                    const id = div.id;
                    const element = await this.api.searchIndividual(id,'id');
                    this.interface.gerarInfo(element);
                    this.interface.addClass(containerVisivel,'active');
    
                }
            })
        }
        const fecharImagem = ()=>{
            const x = document.querySelector(".fa-xmark");
            if(x){
                x.addEventListener('click',()=>{
                    this.interface.removeClass(containerVisivel,'active');   
                }
                
                )
                return true;
            }

        }

        
        abrirImagem();
        const fechar = setInterval(()=>{
           const verdadeiro  = fecharImagem();
        },300)

    }
}


const APP = new Main();