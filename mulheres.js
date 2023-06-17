const express = require("express") 
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome:' Mari' ,
        imagem:'C:\Users\Mari\Pictures\Saved Pictures',
        minibio:'Estagiaria' ,
  
    },

    {

        nome: 'Nala',
        imagem:'C:\Users\Mari\Pictures\Saved Pictures',
        minibio:'Cachoora' ,
    },

    {   nome: 'Thamires',
        imagem: 'C:\Users\Mari\Pictures\Saved Pictures' ,
        minibio:'meu amor' 

    }
]
function mostraMulheres(request, response ) {
    response.json(mulheres)

}
function mostraPorta() {
    console.log("servidor criado e rodando na porta ", porta)
}
app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)