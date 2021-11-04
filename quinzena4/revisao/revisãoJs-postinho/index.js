
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 2));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    return `No comparador de igualdade ${a}===${b} é ${a === b}`
}

 console.log(checarIgualdade(1, 2));


// c-)Faça uma função chamada "verificaSeEMaior"

function verificaSeEMaior(a,b) {
    return ` ${a} > ${b} é ${a > b}`
}

console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= true
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= true
// e-) 0!==null= false


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

const cadastro = () => {
    const usuario = []

    let nomeDoUsuario = prompt ("qual seu nome?")
    let anoDeNascimento = prompt ("qual ano de nascimento")
    let senhaDoUsuario = Number (prompt ("digite sua senha"))
    let nacionalidade = prompt ("qual sua nacionalidade")
    let anoatual = prompt ("qual ano estamos?")
    let idadeUsuario= anoatual - anoDeNascimento
    

    if(idadeUsuario >= 18 && senhaDoUsuario.length >= 6  && nacionalidade.toLowerCase === "brasileira"){
        return usuario.push(nomeDoUsuario, anoDeNascimento, senhaDoUsuario, nacionalidade)
    } else {
        console.log("você não pode cadastrar")
    }
}
console.log(cadastro());


// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
    const login = "labenu"
    const senhaUsuario = prompt ("digite a senha?")
    if ( senhaUsuario === login) {
        console.log("usuário logado")
    } else {
        console.log ("senha inválida")
    }

}

console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {

const nomeUsuario = prompt ("qual o seu nome?")
const nomeVacina = prompt ("qual o nome da vacina que tomou?(cornavac , astrazenica ou pfizer")
let tempo = ""
let data = "01/08/2021"

if(vacina === "coronavac"){
tempo = 28
return `Olá ${nomeUsuario}! A próxima dose da ${nomeVacina} é daqui a ${tempo} dias. Compareça no posto na data ${"29/08/2021"}.`
}else if(nomeVacina === "astrazenica"){
tempo = 90
return `Olá ${nomeUsuario}! A próxima dose da ${nomeVacina} é daqui a ${tempo} dias. Compareça no posto na data ${"30/10/2021"}.`
}else if(nomeVacina === "pfizer"){
tempo = 90
return `Olá ${nomeUsuario}! A próxima dose da ${nomeVacina} é daqui a ${tempo} dias. Compareça no posto na data ${"30/10/2021"}.`
}else {
    return "vacina invalida."
    
}



}
console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    function newarray(usuarios){
        return usuarios.nome === "barbara"
    }
    function newarray2(usuarios){
        return usuarios.imunizacao === "completo"
    }

    const vacinado = usuarios.filter(newarray).map(newarray2)
    return usuarios

}

console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    function newarray(usuarios){
        return usuarios.imunizacao === "incompleta"
    }

    function newarray2(usuarios){
        return `Olá ${usuarios.nome}! Sua imunização está ${usuarios.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`

    }

    const vacinado = usuarios.filter(newarray).map(newarray2)
     return vacinado

}

console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastro = () => {
    //  Sua lógica aqui
}
console.log(cadastro());

const login = () => {
    //  Sua lógica aqui
}
console.log(login());

const primeiraDose = () => {
//  Sua lógica aqui
}
console.log(primeiraDose())
const segundaDose = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDose("ALGUM NOME AQUI"));

const avisoAosAtrasados = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasados());