function checkNull(dado, id, msg) {

    if (dado.value == "") {

        //document.getElementById(id).value = "Preencha o campo.";
        alert(msg)
        setTimeout(function() {
            document.getElementById(id).focus();
        }, 0);
        return false;

    }

    return true;

}

function enviar() {

    var nome = document.getElementById("nome");
    var tipoLog = document.getElementById("tipoLog");

    if (checkNull(nome, "nome", "Preenchimento obrigatório do campo Nome.")) {

        if (checkNull(tipoLog, "tipoLog", "Preenchimento obrigatório do campo Lougradouro.")) {

            //continuar

        } else {

            return false;

        }

    } else {

        return false;

    }

}