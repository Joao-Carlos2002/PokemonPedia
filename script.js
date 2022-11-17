let form = document.querySelector('form');

form.addEventListener("submit", function(e){
    e.preventDefault();
    
    let container = document.getElementById("container-pokemon")
    
    let urlform = "https://pokeapi.co/api/v2/pokemon/";

    let name = document.getElementById("name");

    urlform = urlform + this.name.value;
    urlform = urlform.toLocaleLowerCase();

    let answer = document.getElementById("content");

    let image = document.getElementById("pokemon-content");

    let html = ""

    function maiuscula(value){
        return value[0].toUpperCase() + value.substr(1)
    }

    fetch(urlform)
        .then(answer => answer.json())
        .then(function(data){
            console.log(data)
            html = "Nome: " + maiuscula(data.name) + "<br>";
                if(data.types[1]) {
                    html = html + "Tipo: " + maiuscula(data.types[0].type.name) + " e " + maiuscula(data.types[1].type.name);
                } else if(data.types) {
                    html = html + "Tipo: " + maiuscula(data.types[0].type.name);
                }  
            answer.innerHTML = html;

            image.innerHTML = "<img src='" + data.sprites.other.dream_world.front_default + "'>"
        })
        .catch(function(error){
            console.log(error)
            html = "Pokémon não encontrado, tente novamente!"
            resposta.innerText = html
            image.innerText = "<img src=''><img src=''>"    
        })

    container.style.display = "flex";
    name.value = ""
})