var botaoPaciente = document.querySelector("#adicionar-paciente");

//função anonima
botaoPaciente.addEventListener("click", function (Event) {
    //a função preventDefault() faz com que o elemento não tenha seu comportamento padrão
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacientesDoFormulario(form);
    var pacienteTr = montarTr(paciente);

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return ;
    }
    var tabelaPacientes = document.querySelector("#tabela-pacientes");
    tabelaPacientes.appendChild(pacienteTr);

    form.reset();
    document.querySelector("#mensagem-erro").innerHTML = "";
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

function usuarioExiste(nomePacientes, nome) {
    for (var i = 0; i < nomePacientes.length; i++) {
        nomePaciente = nomePacientes[i];
        if (nomePaciente.textContent === nome) {
            return true;
        }
    }
    return false;
}

function validaPaciente(paciente) {
    var erro = [];
    if (paciente.nome.length === 0) {
        erro.push("nome do paciente não pode ser em branco");
    }
    if (!validaAltura(paciente.altura)) {
        erro.push("Altura Invalida");
    }
    if (!validaPeso(paciente.peso)) {
        erro.push("Peso Invalido");
    }
    if (paciente.gordura.length === 0) {
        erro.push("gordura não poder ser em branco");
    }
    if (paciente.altura.length === 0) {
        erro.push("altura não poder ser em branco");
    }
    if (paciente.peso.length === 0) {
        erro.push("peso não poder ser em branco");
    }
    
    return erro;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro){
       var li = document.createElement("li");
       li.textContent = erro;
       ul.appendChild(li);
    });
}