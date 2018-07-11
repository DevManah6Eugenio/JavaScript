var botaoPaciente = document.querySelector("#adicionar-paciente");

//função anonima
botaoPaciente.addEventListener("click", function (Event) {
    //a função preventDefault() faz com que o elemento não tenha seu comportamento padrão
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var altura = form.altura.value;
    var peso = form.peso.value;
    var gordura = form.gordura.value;

    var nomePacientes = document.querySelectorAll(".info-nome");
    var jaExistePaciente = false;

    for (var i = 0; i < nomePacientes.length; i++) {
        nomePaciente = nomePacientes[i];
        if (nomePaciente.textContent === nome) {
            jaExistePaciente = true;
            alert("Paciente ja existe");
        }
    }

    if (jaExistePaciente !== true) {

        var pacienteTr = document.createElement("tr");
        var nomeTd = document.createElement("td");
        var alturaTd = document.createElement("td");
        var pesoTd = document.createElement("td");
        var gorduraTd = document.createElement("td");
        var imcTd = document.createElement("td");

        nomeTd.textContent = nome;
        alturaTd.textContent = altura;
        pesoTd.textContent = peso;
        gorduraTd.textContent = gordura;
        imcTd.textContent = calcularImc(altura, peso);

        nomeTd.classList.add("info-nome");
        alturaTd.classList.add("info-altura");
        pesoTd.classList.add("info-peso");
        gorduraTd.classList.add("info-gordura");
        imcTd.classList.add("info-imc");

        pacienteTr.appendChild(nomeTd);
        pacienteTr.appendChild(pesoTd);
        pacienteTr.appendChild(alturaTd);
        pacienteTr.appendChild(gorduraTd);
        pacienteTr.appendChild(imcTd);

        var tabelaPacientes = document.querySelector("#tabela-pacientes");

        tabelaPacientes.appendChild(pacienteTr);
    }
});