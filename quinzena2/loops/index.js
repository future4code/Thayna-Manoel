//-----------------Exercícios de interpretação de código-----------------//


/* /* 1. O que o código abaixo está fazendo? Qual o resultado impresso no console? */

// o codigo está fazendo um loop do ate o valor de i ser menor que 5
// O resultado impresso no console sera: 10


/* 
 2. Leia o código abaixo:

a) O que vai ser impresso no console? */
19
21
23
27
30

//b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se não, o que poderia ser usado para fazer isso? */ 
// para acessar o indice de cada elemento desssa lista , a melhor maneira seria usando o for...of


/* 
3.Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ? 

 R:*
   **
   ***
   **** */

//-----------------Exercícios de escrita de código-----------------//
//1) Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

/* a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

   b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array 

   c) Por fim, imprima o array com os nomes dos bichinhos no console */ 
/* 

   let quantidadeDeBichinhos = Number(prompt("Digite quantos bichinhos de estimação você tem ?")) */
/* 

   let nomeDosBichinhos = [] 

   if (quantidadeDeBichinhos === 0){
    console.log("Que pena! Você pode adotar um pet!")
    }else if (quantidadeDeBichinhos > 0)

    for(let i = 0; i < quantidadeDeBichinhos; i++){
        let bichinhos = prompt("Digite o nome dos seus pets?") 
        nomeDosBichinhos = bichinhos
    }
    
      console.log(nomeDosBichinhos) */


     // 2)considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
/* // a.
let arrayOriginal =[10,20,30,40,50]
for (let item of arrayOriginal){
  console.log(item)

}
//b. 
let arrayOriginal = [10,20,30,40,50]
for (let item of arrayOriginal) {
  console.log(item/10)
}
//c.
let arrayOriginal = [10,20,30,40,50]
for (let item of arrayOriginal) {
if 
console.log(item)
} */

//d
/* 
arrayOriginal = [10,20,30,40,50]

novaArray= []
function imprimeNovaArray(array) {
  for (let i=0; i<array.length; i++)
  novaArray[i] = `o elemento do index ${i} é:$
  {array[i]} `
}

console.log(novaArray)
imprimeNovaArray(arrayOriginal)
 */


/* //e 
const arrayOriginal =[10,20,30,40]

const maiorNumero = arrayOriginal => {
  let maiorNumero = arrayOriginal[0]
  for (let numeroEmAnalise of arrayOriginal)
  if (numeroEmAnalise < menorNumero)
  menor = numeroEmAnalise
}

return numeroEmAnalise
}
console.log("o menor numero da array é" ,numeroEmAnalise) */