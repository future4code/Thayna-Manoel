//Exercícios de interpretação de código
//1)a. Matheus Nachtergaele
//     virginia cavendish
//     anal: "Canal Brasil", horario: "19h"

//2)a. nome: "Juca", idade: 3, raca: "SRD"
//     nome: "Juca", idade: 3, raca: "SRD", nome: "Juba"
//     nome: "Juca", idade: 3, raca: "SRD", nome: "Juba", nome:"jubo"

//  b. a sintaxe dos três pontos é utilizada para conseguirmos realizar uma copia do conteudo de um objeto.

//3)a. ira me retornar no console : false || undefined 

//  b. ele esta me retornando false pois este é o valor que está contido dentro do objeto pessoa na chave beckender
// já o resultado underfined foi por conta que não existe dentro do objeto nenhuma chave altura .

//------------//--------------//---------------------------//----------------//------------//-------------------------//--------------------//-----------------
/* 
//Exercícios de escrita de código
//1)a.

const pessoa = {
    nome:"thayna",
    apelidos: ["thay", "tata" , "taty"],
    
}

function recebeUmObjeto (pessoa) {
    console.log (`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]},${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)

}

recebeUmObjeto(pessoa)

//b.

const novaPessoa = {
  /*   ...pessoa,
    apelidos C ["coruja", "fia","thayzinha"]
} 

recebeUmObjeto(novaPessoa) */

 //2)a. Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

/* const primeiroPerfil = {
    nome: "Bruno", 
    idade: 23, 
    profissao: "Instrutor"
}


const segundoPerfil = {
    nome: "thayna", 
    idade: 25, 
    profissao: "desenvolvedora" */
 }
//b. Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
 
/* function listaPerfil(objeto) {

let listaPerfil = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao.length ]
return listaPerfil

} 
console.log (listaPerfil(primeiroPerfil))
console.log (listaPerfil(segundoPerfil))
 */

 //3)Resolva os passos a seguir: 

 //a.
/* 
const carrinho = [];
 */
//b.
/* const primeiraFruta = {
    nome: ("banana"),
    disponibilidade: true
}

const segundaFruta = {
    nome: ("uva"),
    disponibilidade: true
}

const terceiraFruta = {
    nome: ("maçã"),
    disponibilidade: true
} */

//c.
/* const recebeFrutas = (primeiraFruta, segundaFruta, terceiraFruta) => {
    carrinho.push (primeiraFruta, segundaFruta, terceiraFruta);
    console.log (carrinho);
}

recebeFrutas(primeiraFruta, segundaFruta, terceiraFruta);



const auxiliaEstoqueSacolao = (segundaFruta) => {

    const novaDisponibilidade = (!segundaFruta.disponibilidade);
    segundaFruta.disponibilidade = novaDisponibilidade;
}

auxiliaEstoqueSacolao(segundaFruta)  */


//------------//--------------//---------------------------//----------------//------------//-------------------------//--------------------//-----------------
