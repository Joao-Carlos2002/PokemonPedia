let form = document.querySelector('form');

form.addEventListener("submit", function(e){
    e.preventDefault();

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
            html = html + "Tipo: " + maiuscula(data.types[0].type.name);
            answer.innerHTML = html;

            image.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "'>"
        })
        .catch(function(error){
            console.log(error)
            html = "Pokémon não encontrado, tente novamente!"
            resposta.innerHTML = html
            image.innerHTML = "<img src=''><img src=''>"    
        })
})