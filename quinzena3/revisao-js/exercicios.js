// EXERCÍCIO 01
function inverteArray(array) {
  let arrayInvertida = []
  for(let i = array.length-1; i >=0; i-- ){
    arrayInvertida.push(array[i])

  }
  console.log(arrayInvertida)
return arrayInvertida

}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let numerosParesElevados2 = []
  for(let item of array){
    if (item % 2 == 0){
      let elevadoPor2 = item * item
      numerosParesElevados2.push(elevadoPor2)

  }
}
  return numerosParesElevados2
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
let numerosPares = array.filter((arrayPa) => {
  return arrayPa % 2 === 0
})
return numerosPares

}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
 let maiorNumero = array[0]
  for(let i = 0; i < array.length; i++){
    let numeroDaVez = array[i]
    if(numeroDaVez > maiorNumero){
      maiorNumero = numeroDaVez
    
    }
  }
  return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
const valorElementos = array.length
return valorElementos
}  




// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
 const booleano1 = true
 const booleano2 = false
 const booleano3 = !booleano2 
 const booleano4 = !booleano3 

 const respostas = [(booleano1 && booleano2 && !booleano4), ((booleano1 && booleano2) || !booleano3),(booleano2 || booleano3) && (booleano4 || booleano1),!(booleano2 && booleano3) || !(booleano1 && booleano3),!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)]

 return respostas

}


// EXERCÍCIO 07
function retornaNNumerosPares(n) {
let numerosPares = []
for(let i = 0; i<n; i++){

   numerosPares.push(i*2)
   
 }
 return numerosPares
}

// EXERCÍCIO 08


  function checaTriangulo(a, b, c) {
    // return 'Escaleno'
    // return 'Equilátero'
    // return 'Isósceles'
  
  
      if(a === b && a === c){
       return 'Equilátero'
      }else if(a !== b && a !==c && b !== c){
       return  "Escaleno"
      } else((a=== b && b !== c) || (a !== b && b === c))
       return 'Isósceles'

}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
  let maior = undefined
  let menor = undefined
  let maiorDivisivelPorMenor = undefined

  if (num1 > num2) {
    maior = num1
    menor = num2
  } else if (num2 > num1) {
    maior = num2
    menor = num1
  } else if (num1 === num2) {
    maior = num1
    menor = num1
  }
  if (maior % menor === 0) {
    maiorDivisivelPorMenor = true
  } else {
    maiorDivisivelPorMenor = false
  }
    
    const diferenca = maior - menor

    return {maiorNumero : maior, maiorDivisivelPorMenor : maiorDivisivelPorMenor, diferenca : diferenca}
    
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let novaArray = []

  for(item of array){
    let contador = 0
    for (compradoItem of array){
      if(item>compradoItem){
      contador++
      
    }
  }
  novaArray[contador] = item
}
let arrayDosSegundos = [novaArray[novaArray.length-2],(novaArray[1])]
return arrayDosSegundos
}

// EXERCÍCIO 11
function ordenaArray(array) {

const novoArray = array.sort((a, b)=>{

return a - b
    
  })
    
return novoArray

}

// EXERCÍCIO 12
function filmeFavorito() {
  const filmeFavorito = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']

  }
    return filmeFavorito

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
  const filmeFavorito = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', ' Anne Hathaway', ' Emily Blunt', ' Stanley Tucci']

  }
 return`Venha assistir ao filme ${filmeFavorito.nome}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atores}.`

}


// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const medidasRetangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: (2 * (lado1 + lado2)) ,
    area: (lado1 * lado2)

  }
return medidasRetangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
 const pessoaAnonima = {...pessoa, nome:"ANÔNIMO"}
 return pessoaAnonima
}
// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
