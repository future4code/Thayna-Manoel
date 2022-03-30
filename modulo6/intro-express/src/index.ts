import express, { Request, Response  } from 'express'
import cors from 'cors'
import { users, posts } from "./data";

const app= express()

app.use(express.json())
app.use(cors())


app.get("/", (req: Request, res: Response) => {  
res.send("hello from Express!")
})


app.get("/users", (req: Request, res: Response) => {
  const usuarios = users.map((users) => users)

  res.send(usuarios)
})


// é melhor criar o arrays de posts fora de usuarios, pois achei que ficaria mto confuso se coloca-se dentro.


app.get("/posts", (req: Request, res: Response) => {
   const getPosts = users.map((users) => {

  return users.posts
    }).flat(1)


   res.send(getPosts)
 })



// app.get("/postsPorId", (req: Request, res: Response) => {
//   const idusers = Number(req.query.id);

//   let usersPosts

//   users.forEach(post => {
//     if (post.id === idusers) {
//       usersPosts = post.post
//     }
//   })

//   res.send(usersPosts)

// })



app.listen(3003, () => {
console.log("servidor ta rodando...")
})


