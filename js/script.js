const campoTexto = document.getElementById("campoTexto");
const btnConsultar = document.getElementById("btnConsultar");
const btnLimpar = document.getElementById("btnLimpar");
const display = document.getElementById("display");
btnConsultar.addEventListener("click", function () {
    let pokemon = campoTexto.value.trim();

    if (pokemon === "") {
        alert("Digite um Pokémon!");
        return;
    }
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    fetch(url)

        .then(function (resposta) {
            return resposta.json();
        })

        .then(function (dados) {
            display.innerHTML =
                "<img src='" + dados.sprites.front_default + "'><br>" +
                "Nome: " + dados.name + "<br>" +
                "ID: " + dados.id + "<br>" +
                "Altura: " + dados.height + "<br>" +
                "Peso: " + dados.weight;
            display.style.display = "block";
        });
});

btnLimpar.addEventListener("click", function () {
    campoTexto.value = "";
    display.innerHTML = "";
    display.style.display = "none";

});