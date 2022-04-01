import express, { Request, Response } from "express";
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())


app.get("/ping", (req: Request, res: Response) =>{
  res.status(201).send("pong");
});


app.listen(3003, () => {
    console.log("server is running")
})

