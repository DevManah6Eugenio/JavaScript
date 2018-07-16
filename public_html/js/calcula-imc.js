var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente) {
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    
    var tdImc = paciente.querySelector(".info-imc");

    //validação 
    var alturaEhValida = validaAltura(altura);
    var pesoEhValido = validaPeso(peso);

    //se peso não for valido
    if (!pesoEhValido) {
        console.log("Peso inválida");
        tdImc.textContent = "Peso inválida!";
        paciente.classList.add("paciente-invalido");
    }

    //se altura não for valido
    if (!alturaEhValida) {
        console.log("Altura inválida");
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    //calculo do imc
    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos!";
    }
});
  
function calculaImc(peso, altura) {
    var imc = (peso / (altura * altura)).toFixed(2);
    return imc;
}

function validaPeso(peso) {
    if (peso >= 0 && peso <= 400) {
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