var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

tdImc.textContent = imc;

//validação 
var alturaEhValida = true;
var pesoEhValido = true;

//peso
if(peso < 0 || peso >= 400) {
    console.log("Peso inválida");
    tdPeso.textContent = "Peso inválida!";
    pesoEhValido = false;
}

//altura
if(altura < 0 || altura >= 4 ) {
    console.log("Altura inválida");
    tdAltura.textContent = "Altura inválida!";
    alturaEhValida = false;
}

//calculo do imc
if (alturaEhValida && pesoEhValido) {
    imc = peso / (altura * altura);
    tdImc.textContent = imc;
} else {
    tdImc.textContent = "Altura e/ou peso inválidos!";
}