<!-- -  Funções em JavaScript -->
Uma função é um bloco de código que pode ser invocado a partir de um nome.Podem receber entradas (que podem ser usadas no meio do código) e saidas (que podem ser acessadas após a execução)
São estruturas que permitem isolar uma parte do nosso código e reaproveitá-lo depois.
<!-- -  Objeto em JavaScript ⇒ Sintaxe, o que é e como usar -->
sintaxe: var o = {};

 Objetos são estruturas de sintaxe que nos permitem representar dados mais complexos de uma maneira mais organizada,Os objetos possuem propriedades, que possuem chave e valor

<!-- -  Array  ⇒ Sintaxe, o que é e como usar -->
sintaxe: [element0, element1, ..., elementN]
new Array(element0, element1, ..., elementN)
new Array(arrayLength)

Na prática, o array é uma estrutura de dados que contém um índice numérico e um elemento, que pode ser de qualquer tipo primitivo de dados, um objeto ou, até mesmo, um outro array.

A sintaxe de um array tem diferentes formatos. A declaração direta ou representação literal é aquela em que o array é representado pelos símbolos de colchetes, que podem ou não conter elementos

<!-- -  Map  ⇒ Sintaxe, o que é e como usar -->
sintaxe:myMap[Symbol.iterator]

O JavaScript map faz parte do conjunto de métodos disponíveis na linguagem para a manipulação de objetos do tipo array. Ele funciona como uma estrutura de repetição, pois percorre todos os elementos do array, executa determinada ação e retorna um novo conteúdo.
<!-- -  Filter  ⇒ Sintaxe, o que é e como usar -->
sintaxe:var newArray = arr.filter(callback[, thisArg])

O método filter() é um recurso que permite fazer a filtragem de elementos com apenas poucas linhas de comandos. Isso facilita o entendimento e a manutenção do código pelas pessoas que desenvolvem softwares.
<!-- -  Diferenças entre Map e Filter -->
O map() executa uma função em todos os itens de um array enquanto o filter() filtra uma array.
<!-- -  Diferença entre os métodos push e pop e como usá-los -->
Pop() -> remove o último elemento de um array e retorna este elemento
Push() -> adiciona um ou mais elementos ao final de um array e retorna o tamanho deste array
<!-- -  Método slice do array  ⇒ Sintaxe, o que é e como usar -->
sintaxe: arr.slice([início[,fim]])
O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original. O Array original não é modificado.
<!-- -  Método splice do array  ⇒ Sintaxe, o que é e como usar -->
sintaxe: array.splice(indice[, deleteCount[, elemento1[, ...[, elementoN]]])

array.splice(indice) // SpiderMonkey/Firefox extension

O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.