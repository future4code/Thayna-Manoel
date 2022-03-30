import express, { response } from 'express'
import cors from 'cors'

const app= express()

app.use(express.json())
app.use(cors())

//exercicio1

app.get("/", (request,response) => {
response.send("hello from Express!")
})

//exercicio2
//exercicio3
//exercicio4
//exercicio5
//exercicio6
//exercicio7
//exercicio8




app.listen(3003, () => {
console.log("servidor ta rodando...")
})


