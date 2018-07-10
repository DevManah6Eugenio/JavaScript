// DOM(Document Object Model) document faz a comunicação entre HTML e JavaScript
// console.log(document);

// seleciondo apenas elementos da classe titulo
var titulo = document.querySelector(".titulo");
//textContent é o conteudo que esta no objeto
titulo.textContent = "Aparecida Nutricionista";

//objeto primeiro paciente 
var paciente = document.querySelector("#primeiro-paciente");

//conteudo do objeto .info-peso e info-altura 
peso = paciente.querySelector(".info-peso").textContent;
altura = paciente.querySelector(".info-altura").textContent;

//IMC = peso / altura x altura;
imc = (peso / (altura * altura));

console.log(peso);
console.log(altura);

console.log(imc);