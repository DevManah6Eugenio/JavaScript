var botaoPaciente = document.querySelector("#adicionar-paciente");

//função anonima
botaoPaciente.addEventListener("click", function (Event) {
    //a função preventDefault() faz com que o elemento não tenha seu comportamento padrão
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacientesDoFormulario(form);
    var erros = validaPaciente(paciente);

    //se existir erros durante a validação
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return ;
    }

    adicionarPacienteNaTabela(paciente);
    
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
    pacienteTr.classList.add("paciente");

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

function validaPaciente(paciente) {
    var erros = [];
    
    if (paciente.nome.length === 0) {
        erros.push("nome do paciente não pode ser em branco");
    }
    
    if (!validaAltura(paciente.altura)) {
        erros.push("Altura Invalida");
    }
    
    if (!validaPeso(paciente.peso)) {
        erros.push("Peso Invalido");
    }
    
    if (paciente.gordura.length === 0) {
        erros.push("gordura não poder ser em branco");
    }
    
    if (paciente.altura.length === 0) {
        erros.push("altura não poder ser em branco");
    }
    
    if (paciente.peso.length === 0) {
        erros.push("peso não poder ser em branco");
    }
    
    return erros;
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

function adicionarPacienteNaTabela(paciente){
    var pacienteTr = montarTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}
