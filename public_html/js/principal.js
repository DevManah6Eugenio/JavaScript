var pacientes = document.querySelectorAll(".paciente");

for (var i = 0 ; i < pacientes.length ; i++) {
    paciente = pacientes[i];
    console.log(paciente);

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");

    //validação 
    var alturaEhValida = true;
    var pesoEhValido = true;

    //peso
    if (peso <= 0 || peso >= 400) {
        console.log("Peso inválida");
        tdImc.textContent = "Peso inválida!";
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido");
    }

    //altura
    if (altura <= 0 || altura >= 3) {
        console.log("Altura inválida");
        tdImc.textContent = "Altura inválida!";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido");
    }

    //calculo do imc
    if (alturaEhValida && pesoEhValido) {
        imc = (peso / (altura * altura));
        tdImc.textContent = imc.toFixed(2);
    } else {
        console.log("Altura e/ou peso inválidos!");
    }
}