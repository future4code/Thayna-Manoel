///-----------------//-----------Exercícios de interpretação de código----------------// --------------///-------------//
/*1)Leia o código abaixo:
a. Explique o que o código faz. Qual o teste que ele realiza? 
R:ele pergunta ao usuario um numero que ele gostaria de testar e ele me retorna se esse numero passo ou nao no teste

b. Para que tipos de números ele imprime no console "Passou no teste"? 
R:para numero multiplos por 2

c. Para que tipos de números a mensagem é "Não passou no teste"?
R:para numero não multiplos por 2 


2)O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
a. Para que serve o código acima?
R:ele pedi para o usuario escolher uma fruta , e retorna no console uma mensagem com a fruta escolhida e o preço dela.


b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
R:sera impresso no console : "o preço da fruta Maçã é R$ 2.25"



c. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima 
do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
R:como o break é  palavra que faz com que a execução do código saia do bloco em questão , a mensagem impresa no console
seria "o preço da fruta pêra é R$ 5 " pois ele esta condirando o valor do default



3)Leia o código abaixo:
a. O que a primeira linha está fazendo?
está pedindo ao usuario que digite um primeiro número qualquer

b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

10 : me retornara "Esse número passou no teste"
-10 : não me retornara resultado.


c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
R: sim, o erro ocorre poiso console.log está fora do escopo local , então não cosnegui reconhecer a mensagem 


*/

///-----------------//-----------Exercícios de escrita de código----------------// --------------///-------------//

//1)Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

//a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
//b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
//c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."

/* let idadeDoUsuario = Number(prompt("qual sua idade?"))

if(idadeDoUsuario >= 18) {
    console.log ("Você pode dirigir")
} else {
    console.log("Você não pode dirigir.")
} */

//2)Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a 
//mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else
/* 

let turnoAluno = prompt ("qual seu turno ? M (matutino) ou V (Vespertino) ou N (Noturno")

if(turnoAluno === "M") {
    console.log ("Bom Dia!")
} else if (turnoAluno === "V") {
    console.log("Boa Tarde!")
} else if(turnoAluno === "N") {
    console.log("Boa Noite!") 
} else {
    console.log ("turno não identificado, escolha  M (matutino) ou V (Vespertino) ou N (Noturno)")
}

    
 */

//3) Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.

/* let turnoAluno = prompt ("qual seu turno ? M (matutino) ou V (Vespertino) ou N (Noturno")
switch (turnoAluno){
    case 'M':
        console.log("Bom Dia!")
        break
    case 'V':
        console.log("Boa Tarde!")  
        break
     case 'N':
        console.log("Boa Noite!") 
        break
    default:
        console.log ("turno não identificado, escolha  M (matutino) ou V (Vespertino) ou N (Noturno)" )
        break

}

*/

//4)

/* let generoFilme = prompt ("qual o gênero de filme que vão assistir?")
let valorDoFilme = prompt ("qual o preço do filme que vão assistir?")

if(generoFilme === "fantasia" && valorDoFilme <= 15 ) {
    console.log ("Bom filme!")
} else {
    console.log("Escolha outro filme :(")                  
} */


///-----------------//-----------DESAFIO----------------// --------------///-------------//

//1)

/* let generoFilme = prompt ("qual o gênero de filme que vão assistir?")
let valorDoFilme = prompt ("qual o preço do filme que vão assistir?")
let lanchinho = prompt ("qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc)?")

if(generoFilme === "fantasia" && valorDoFilme <= 15 ) {
    console.log ("Bom filme!")
    console.log("Aproveite o seu" ,lanchinho)
} else {
    console.log("Escolha outro filme :(")                  


} */

/* 
//2)

let nomeCompleto = prompt("Digite seu nome completo?")
let tipoDeJogo = prompt("Digite qual tipo de jogo : iD ou DO? (IN: indica internacional; e DO : indica doméstico;)")
let etapaDoJogo = prompt("qual etapa do jogo? (SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final)")
let escolhaCategoria = Number(prompt("escolha uma Categoria? pode ser as opções 1, 2, 3 ou 4"))
let quantidadeIngresso = Number(prompt("qual a quantidade de ingresso que deseja?"))
let dolar = 4.10


let tipoDeJogoDO = "Domestico"
let tipoDeJogoIN = "internacional"

let categoria1 = [1320, 600, 1980]
let categoria2 = [880, 440, 1320]
let categoria3 = [550, 330, 880]
let categoria4 = [220, 170, 330]




let etapaJogoSF = "semi-final"
let etapaJogoDT = "decisão de terceiro lugar"
let etapaJogoFI = "final"

if (etapaDoJogo === "SF" && tipoDeJogo === 1) {
    valorDoIngresso = 1320
} else if (etapaDoJogo === "SF" && tipoDeJogo === 2) {
    valorDoIngresso = 880

} else if (etapaDoJogo === "SF" && tipoDeJogo === 3) {
    valorDoIngresso = 550

} else if (etapaDoJogo === "SF" && tipoDeJogo === 4) {
    valorDoIngresso = 220

} else if (etapaDoJogo === "DT" && tipoDeJogo === 1) {
    valorDoIngresso = 660

} else if (etapaDoJogo === "DT" && tipoDeJogo === 2) {
    valorDoIngresso = 440

} else if (etapaDoJogo === "DT" && tipoDeJogo === 3) {
    valorDoIngresso = 330

} else if (etapaDoJogo === "DT" && tipoDeJogo === 4) {
    valorDoIngresso = 170

} else if (etapaDoJogo === "FI" && tipoDeJogo === 1) {
    valorDoIngresso = 1980

} else if (etapaDoJogo === "FI" && tipoDeJogo === 2) {
    valorDoIngresso = 1320

} else if (etapaDoJogo === "FI" && tipoDeJogo === 3) {
    valorDoIngresso = 880

} else if (etapaDoJogo === "FI" && tipoDeJogo === 4) {
    valorDoIngresso = 330
}

if (tipoDeJogo === "DO" ) {
    valorDoIngresso = valorDoIngresso
} else if (tipoDeJogo === "IN" ) {
valorDoIngresso = valorDoIngresso / 4.10 

} else {
    console.log( "tipo de jogo : iD ou DO? (IN: indica internacional; e DO : indica doméstico;)" )
} 




console.log (tipoDeJogo)
console.log ("---Dados da compra--- ")
console.log ("Nome do cliente:", nomeCompleto)
console.log ("Tipo do jogo:", tipoDeJogo)
console.log ("Etapa do jogo:", etapaDoJogo)
console.log ("Etapa do jogo:", escolhaCategoria)
console.log ("Quantidade de Ingressos:", quantidadeIngresso)
console.log ("---Valores--- ")
console.log ("Valor do ingresso:", valorDoIngresso)
console.log ("Valor total:", valorTotalIngresso)

 */