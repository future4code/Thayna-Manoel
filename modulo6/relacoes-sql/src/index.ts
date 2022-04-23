
import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(express.json()); 
app.use(cors()); 




app.get('/', (request: Request, response: Response) => {

response.send('Hello,word')

});




app.listen(3003, () => {
   console.log('Server rodando...');
});
