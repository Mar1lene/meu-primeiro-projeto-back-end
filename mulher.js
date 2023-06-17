const express = require("express") 
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
 response.json({
    nome:  'Thamires  Rodrigues',
    imagem:'https://photos.google.com/photo/AF1QipMYOlrUa6OYVUWNJMej8GsPx9ZAt4b5FxozdL-q', 
    minibio:  'Meu amor '
})
}



function mostraPorta() {
    console.log("servidor criado e rodando na porta ", porta)
}


app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)