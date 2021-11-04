function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let repeticao = 0
  for(let i=0; i <arrayDeNumeros.length; 1++){
    if(arrayDeNumeros[i] === numeroEscolhido){
      repeticao = repeticao + 1
      return arrayDeNumeros
    }
  }

}