var tabela = document.querySelectorAll("#pacientes");

tabela.forEach(function (paciente) {
    paciente.addEventListener("dblclick", function (event) {
        var alvoDoEvento = event.target;
        if (alvoDoEvento.tagName === "TD") {
            var paiDoAlvo = alvoDoEvento.parentNode;
            paiDoAlvo.classList.add("fadeOut");
            setTimeout(function () {
                paiDoAlvo.remove();
            }, 500);
        }
    });
});