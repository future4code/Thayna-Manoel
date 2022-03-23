// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagemim)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
const num1 = Number(prompt("digite a altura de um retângulo?"))
const num2 = Number(prompt("digite a largura de um retângulo"))
const area = num1 * num2
console.log (area)
}

// Exercício 2
function imprimeIdade() {
  const anoAtual = Number(prompt("qual ano atual?"))
  const anoDeNascimento = Number(prompt("qual o ano do seu nascimento"))
  const resultadoIdade= anoAtual - anoDeNascimento
  console.log (resultadoIdade)
}

// Exercício 3
function calculaIMC() {
  const pesoUsuario = Number(prompt("qual o seu peso em Kg?"))
  const alturaUsuario = Number(prompt("qual sua altura em metros?"))
  const resultadoDoIMC= pesoUsuario / (alturaUsuario * alturaUsuario)
  console.log (resultadoDoIMC)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  const nomeUsuario = prompt("qual o seu nome?")
  const idadeUsuario = prompt("qual sua idade?")
  const emailUsuario = prompt("qual seu email?")

  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  const primeiraCor = prompt("digite a primeira cor favorita:")
  const segundaCor = prompt("digite a segunda cor favorita:")
  const terceiraCor = prompt("digite a terceira cor favorita:")
  const coresPreferidas = [primeiraCor , segundaCor , terceiraCor]
console.log (coresPreferidas)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  const stringUsuario = prompt("digite uma string?")
   console.log(stringUsuario.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  const custoEspetaculo = Number(prompt("Qual custo de um espetáculo de teatro?"))
  const valorIngreso = Number(prompt("E qual valor de cada ingresso ?"))
  const precisamSerVendidos = custoEspetaculo / valorIngreso
  console.log(precisamSerVendidos)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  const primeiraString = prompt("digite a primeira string?")
  const segundaString = prompt("digite a segunda string?")
  console.log(primeiraString.length===segundaString.length)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  const primeiraString = prompt("digite a primeira string?")
  const segundaString = prompt("digite a segunda string?")
 
  const Palavras =primeiraString.toLowerCase() === segundaString.toLowerCase ()

  console.log(Palavras)

 
}

// Exercício 10
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("qual ano atual?"))
  const anoDeNascimento = Number(prompt("qual o ano do seu nascimento"))
  const anoDeEmissaoIdentidade= Number(prompt("qual ano em que sua carteira de identidade foi emitida"))
  let idade = anoAtual - anoDeNascimento
  let validadeIdentidade = anoAtual - anoDeEmissaoIdentidade

  let faixaEtaria1 = (idade <= 20) && (validadeIdentidade >= 5)
  let faixaEtaria2 = (idade >= 20) && (idade <= 50 &&  validadeIdentidade >= 10)
  let faixaEtaria3 = (idade > 50) && (validadeIdentidade >= 15)
  
  console.log(faixaEtaria1 || faixaEtaria2 || faixaEtaria3)
}
// Exercício 11
function checaAnoBissexto() {
const anoUsuario = Number(prompt("digite um ano?"))

bissexto1 = (anoUsuario % 400) == 0
bissexto2 = ((anoUsuario % 4 == 0) && (anoUsuario % 100 != 0))
bissextoNao = anoUsuario && bissexto1 && bissexto2

console.log (bissextoNao || bissexto1 || bissexto2)



}

// Exercício 12
function checaValidadeInscricaoLabenu(){

 let idadeUsuario = prompt("Você tem mais de 18 anos?")
 let ensinoMedio = prompt("Você possui ensino médio completo?")
 let disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?") 

let resultado = (idadeUsuario ==="sim") && (ensinoMedio === "sim") && (disponibilidade === "sim")

console.log(resultado)


}