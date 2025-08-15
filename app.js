// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
let inputAmigo = document.getElementById("amigo");
let ulListaAmigos = document.getElementById("listaAmigos");

console.log(inputAmigo)

function agregarAmigos() {
    listaAmigos.push(inputAmigo.value);
}

if (nombre === "") {
    alert('Por favor, inserte un nombre.');
    return;
}


function limpiarCampoDeEntrada() {
    document.querySelector(listaAmigos).value = '';
}