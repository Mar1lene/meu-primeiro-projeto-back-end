const express = require("express") // aqui estou inicinado o express
const router = express.Router() // aqui estou configurando a primeira parte da rota
const cors= require('cors')// aqui estou trazendo o pacote cors que permite consumir essa api no front-end
const conectaBancoDeDados= require('./bancoDeDados') //aqui estou ligando ao arquivo banco de dados
conectaBancoDeDados() // estou chamando a função que conecta o banco de dados 

const Mulher = required('./mulherModel')

const app = express() //aqui estou inicinado o app
app.use(express.json())
app.use(cors())
const porta = 3333 // aqui estou criando a porta 

//GET
async function mostraMulheres(request, response ) {
    try {
        const mulheresVindasDoBancoDeDados=await Mulher.fing()

        response.json(mulheresVindasDoBancoDeDados)

    } catch (erro){
        console.log()
    }  
}
//POST
async function criaMulher(request, response) {
    const novaMulher = new Mulher({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao:  request.body.citacao
    })

    try {
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada)
    } catch (erro){
        console.log ()
    }

} 

//PATCH
async function corrigeMulher(request,response) {
    try {
        const mulhereEncontrada = await Mulher.findByid(request.params.id)
        
    if (request.body.nome)  {
        mulherEncontrada.nome = request.body.nome

    }

     if (request.body.minibio) {
        mulherEncontrada.minibio = request.body.minibio

     }
      if (request.body.imagem) {
        mulherEncontrada = request.body.imagem
    
      }
      if (request.body.citacao){
        mulherEncontrada = request.body.citacao
      }

      const mulherAtualizadaNoBancoDeDados = await mulhereEncontrada.save()
      response.json(mulherAtualizadaNoBancoDeDados)
    } catch (erro) {
        console.log(erro)
    }
}

//DELETE
async function deletaMulher(request,response) {
    try {
        await Mulher.findByidDelete(request.params.id)
        response.json({messagem: 'Mulher deletada com sucesso!'})

    }catch(erro){
        console.log(erro)
    }

    
}

app.use(router.get('/mulheres', mostraMulheres)) //confihurei rota GET /mulheres
app.use(router.post('/mulheres', criaMulher)) // configurei rota POST /mulheres 
app.use(router.patch('/mulhered/:id1', corrigeMulher))// configurei rota PATCH /mulheres/ :id
app.use(router.delete('/mulheres/:id', deletaMulher)) //configurei rota DELETE/mulheres 
//porta 
function mostraPorta() {
    console.log("servidor criado e rodando na porta ", porta)
}

app.listen(porta, mostraPorta) //servidor ouvindo a porta 