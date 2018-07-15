var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    paciente = pacientes[i];
    console.log(paciente);

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");

    //validação 
    var alturaEhValida = validaAltura(altura);
    var pesoEhValido = validaPeso(peso);

    //peso
    if (!pesoEhValido) {
        console.log("Peso inválida");
        tdImc.textContent = "Peso inválida!";
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido");
    }

    //altura
    if (!alturaEhValida) {
        console.log("Altura inválida");
        tdImc.textContent = "Altura inválida!";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido");
    }

    //calculo do imc
    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    } else {
        console.log("Altura e/ou peso inválidos!");
    }
}

function calculaImc(peso, altura){
    return (peso / (altura * altura)).toFixed(2);
}

function validaPeso(peso) {
    if (peso >= 0 && peso <= 400){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3) {
        return true;
    } else {
        return false;
    }
}