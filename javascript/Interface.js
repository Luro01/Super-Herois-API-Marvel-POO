export default class Interface{

    gerarCard(container,lista){
        container.innerHTML = "";
        lista.forEach((element,index) =>{
        if(index < 20){
            const newDiv = document.createElement("div");
            newDiv.classList.add('cards');
            newDiv.id = element.id; 
            const imageUrl = `${element.thumbnail.path}.${ element.thumbnail.extension}`;
            newDiv.innerHTML =
            `
                <img src="${imageUrl }" loading="lazy" alt="${element.name}">
                <h4>${element.name}</h4>
            `

            container.appendChild(newDiv);
        }

    })}

    gerarInfo(element){
        const elemento = element[0];
        const container = document.querySelector(".containerInformaçoes");
        container.innerHTML = "";
        const div = document.createElement('div');
        div.classList.add('info');
        const imageUrl = `${elemento.thumbnail.path}.${ elemento.thumbnail.extension}`;
        if(elemento.description == ""){
            elemento.description = "Infelizmente a marvel não  disponibilizou uma descrição.";
        }
        div.innerHTML = 
        `
        <h3>${elemento.name}</h3>
        <i class="fa-solid fa-xmark"></i>
        <img src="${imageUrl}" alt="">
        <p>${elemento.description}</p>
        `

        container.appendChild(div)
    }

    addClass(element,className){
        element.classList.add(`${className}`);
    }

    removeClass(element,className){
        element.classList.remove(`${className}`);
    }

    }
    