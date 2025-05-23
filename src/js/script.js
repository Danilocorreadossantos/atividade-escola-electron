var formMatricula = document.getElementById("form-cadastro")

var listaMatricula =[]

function cadastrarMatricula(event){
    event.preventDefault()

    var nomeAluno = document.getElementById("nome").value
    var numeroMatricula = document.getElementById("matricula").value
    var idadeAluno = document.getElementById("idade").value
    var nomeMae = document.getElementById("mae").value
    var numeroTelefone = document.getElementById("telefone").value

    var objetoMatricula = {
        nome: nomeAluno,
        numero: numeroMatricula,
        idade: idadeAluno,
        nomeM: nomeMae,
        tel: numeroTelefone

    }

    nomeAluno.value = "";
    numeroMatricula.value = "";
    idadeAluno.value = "";
    nomeMae.value = "";
    numeroTelefone.value = "";

    listaMatricula.push(objetoMatricula)
    console.log("deu certo", objetoMatricula ,)
}

formMatricula.addEventListener("submit", cadastrarMatricula)
console.log("Cadastrar matricula foi")