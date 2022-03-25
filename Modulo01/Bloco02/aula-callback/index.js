/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////Exercícios de interpretação de código//////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//1)
/*  R:  sera impresso no console :
item (o conteudo) :
{nome: 'Amanda Rangel', apelido: 'Mandi'}
{nome: 'Laís Petra', apelido: 'Laura'}
{nome: 'Letícia Chijo', apelido: 'Chijo'}

 no index: (a posição)

 0
 1
 2
 
 e no array (a array inteira)

0: {nome: 'Amanda Rangel', apelido: 'Mandi'}
1: {nome: 'Laís Petra', apelido: 'Laura'}
2: {nome: 'Letícia Chijo', apelido: 'Chijo'}
length: 3
[[Prototype]]: Array(0)
 
 
 */

 


//2)
//R: sera impresso no console:

/* Amanda Rangel
   Laís Petra
   Letícia Chijo

 */

//3)
//R: sera impresso no console:
/* Mandi
   Laura

 */



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////Exercícios de escrita de código////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//1)Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
//R:

/* const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
] */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* a. 

const nomeDosPets = pets.map((item) => {
    return item.nome
})

console.log(nomeDosPets)
 */


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//b.


/* const filtroDogsSalsichas = pets.filter((item) => {
return item.raca === "Salsicha" 

})

console.log(filtroDogsSalsichas) */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* //c.

const novaArrayPoodels =(item) => {
    return item.raca === "Poodle"
}

const racaPodles = pets.filter (novaArrayPoodels)

const pegarNome= (item ) => {
    return item.nome
}

const nomeDosPoodles= racaPodles.map (pegarNome)
console.log("Você ganhou um cupom de desconto de 10% para tosar o/a", nomeDosPoodles , "!") */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//2)Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
//R:
/* const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ] */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//a.

/* 
const nomeDosProdutos = produtos.map((item) => {
    return item.nome
})

console.log(nomeDosProdutos) */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//b.
/* const nomePreco = produtos.map ((item) => {

const novoValor = (item.preco *0.95)
const resultado = {
    nome:item.nome,
    preco: novoValor
}
return resultado
}
)

console.log(nomePreco) */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//c. 

/* const nomeDasBebidas = produtos.filter((item) => {
    return item.categoria === "Bebidas"
})

console.log(nomeDasBebidas) 

*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//d.
/* const arrayYpe = produtos.filter((item) => {

return item.nome.includes("Ypê") === true
})

console.log(arrayYpe) */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//e.
/* const arrayYpe = produtos.filter((item) => {
    return item.nome.includes("Ypê") === true
})

const frasesYpe = arrayYpe.map((item) => {
    nome = item.nome
    preco = item.preco
    return (" compre " + nome + " por " + preco + "!")
})

console.log(frasesYpe) */