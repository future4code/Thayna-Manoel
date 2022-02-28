<!-- -  Exercícios de Fixação de Javascript  -->


<!-- -  EX 1 -JS  -->


'''function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {

const salario = 2000 
let comissao = (qtdeCarrosVendidos*100) + valorTotalVendas * 0.05 
let salarioTotal = salario + comissao 
return salarioTotal

}'''

<!-- -  EX 2 -JS  -->

'''function calculaPrecoTotal(quantidade) {

if(quantidade < 12){ preco = 1.3 

}else if (quantidade >= 12){ preco = 1 } 

let precoTotal = quantidade * preco 

return precoTotal
} '''

<!-- -  EX 3 -JS  -->


'''function calculaNota(ex, p1, p2) {

let notaP1 = p1 * 2 
let notaP2 = p2 * 3
let notaEx = ex * 1 
 
  
let mediaProvas = (notaEx + notaP1 + notaP2) / 6
  
    if(mediaProvas >= 9){
      return "A"
    }else if(mediaProvas < 9 && mediaProvas >= 7.5){
      return "B"
    }else if(mediaProvas < 7.5 && mediaProvas >= 6){
      return "C"
    }else {return "D"} 
    
}'''


<!-- -  EX 4 -JS  -->

'''function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
const procuraNumero = arrayDeNumeros.filter(item=>{
return item === numeroEscolhido
})

if(procuraNumero.length){
return `O número ${numeroEscolhido} aparece ${procuraNumero.length}x` 
}else{return "Número não encontrado"}
  
} '''

<!-- -  EX 5 -JS  -->

'''const nomeDosAnimais = animais.map (item => 
{ return(item.nome) })

return nomeDosAnimais'''

<!-- -  EX 6 -JS  -->

'''function filtraTarefas() {
  const tarefas = [
    { titulo: "Fazer Remember", status: "done", tempo: 30 },
    { titulo: "Fazer Challange", status: "todo", tempo: 30 },
    { titulo: "Assistir Aula", status: "done", tempo: 120 },
    { titulo: "Fazer almoço nutritivo", status: "done", tempo: 60 },
    { titulo: "Ler atentamente exercícios do dia", status: "doing", tempo: 20 },
    { titulo: "Fazer exercício do dia", status: "doing", tempo: 180 },
    { titulo: "Fazer desafio", status: "doing", tempo: 60 },
    { titulo: "Ir para o Stand Up", status: "todo", tempo: 30 },
    { titulo: "Enviar Feedback", status: "todo", tempo: 15 },
    { titulo: "Enviar Exercício", status: "todo", tempo: 15 },
    { titulo: "Jogar Videogame", status: "todo", tempo: 120 },
    { titulo: "Assistir Novela", status: "todo", tempo: 90 }
 ]

const tarefasTerminadas = tarefas.filter((item)=>{
    return item.status === "done"
  })
  
  const arrayTarefasTerminadas = tarefasTerminadas.map((item) =>{
    return item.titulo
  })
  

return arrayTarefasTerminadas


}'''

