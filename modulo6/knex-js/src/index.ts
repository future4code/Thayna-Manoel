
import express, { Request, Response } from 'express';
import cors from 'cors';
import connection from './connection';
import { AddressInfo } from "net";

const app = express();

app.use(express.json()); 
app.use(cors()); 

// //Endpoint teste
// app.get('/teste',(req: Request, res: Response): void => {
//    try {
//       res.status(200).send({message: "sucesso"});
//   }   catch (error : any) {
//      res.status(500).send(error.sqlMessage || error.message);
//   }
// });

//1a) permite enviarmos uma query para o banco de dados de alguma forma

//1b) Faça uma função que busque um ator pelo nome

const getActorByName = async (name: string): Promise<any> => {
   const result = await connection.raw(`
   SELECT * FROM Actor WHERE name = '${name}'
   `)

   return result[0]
}
getActorByName("Tony Ramos")
   .then(result => {
       console.log(result)
   })
   .catch(err => {
       console.log(err)
   })

   //1c) Faça uma função que receba um gender retorne a 
   //quantidade de itens na tabela Actor com esse gender. Para atrizes, 
   //female e para atores male.


   const countGender = async (gender: string): Promise<any> => {
      const result = await connection.raw(`
      SELECT COUNT(*) FROM Actor WHERE gender = '${gender}';
      `)
      return result[0]
  }
  countGender("female")
      .then(result => {
          console.log(result)
      })
      .catch(err => {
          console.log(err)
      })
  


//a) Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão

const server = app.listen(3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`server is running in https://localhost:${address.port}`);
   } else {
      console.error(`server is not running in https://localhost`);
   }
});
