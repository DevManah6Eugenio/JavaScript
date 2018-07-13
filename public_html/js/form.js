var botaoPaciente = document.querySelector("#adicionar-paciente");

//função anonima
botaoPaciente.addEventListener("click", function (Event) {
    //a função preventDefault() faz com que o elemento não tenha seu comportamento padrão
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacientesDoFormulario(form);

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
        var pacienteTr = montarTr(paciente);

        var tabelaPacientes = document.querySelector("#tabela-pacientes");

        tabelaPacientes.appendChild(pacienteTr);
    }
});

function obtemPacientesDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };
    return paciente;
}

function montarTr(paciente) {
    var pacienteTr = document.createElement("tr");

    pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montarTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function usuarioExiste(nomePacientes){
    
}