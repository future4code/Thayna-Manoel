//1
//a) acessamos os parâmetros passado pelo process.argv
// b ) 
const nome = "thayna"
const idade = number("26")
const seteAnos = idade + number("7")

console.log(`Olá ${nome}! Você tem ${idade} anos.`)

//c)

console.log(`Olá ${nome}! Você tem ${idade} anos. Em sete anos você terá ${seteAnos}.`) 


//2
const mathOperator = process.argv[2];

const primeiroNumero = Number(process.argv[3]);
const segundoNumero = Number(process.argv[4]);

switch (mathOperator) {
  case "soma":
    console.log(primeiroNumero + segundoNumero);
    break;
  case "sub":
    console.log(primeiroNumero - segundoNumero);
    break;
  case "mult":
    console.log(primeiroNumero * segundoNumero);
    break;
  case "div":
    console.log(primeiroNumero / segundoNumero);
    break;
}



//3

const objetivo = `${process.argv[2]} ${process.argv[3]}`;
const adicionarLista = ["tomar agua"];

const fazer = (tarefa) => {
  return adicionarLista.push(tarefa);
};

fazer(objetivo);

console.log(adicionarLista);