const express = require ('express')
const Rotas = express.Router()

//conexão com BD
const mongoose = require ('mongoose')
require ('./src/conexao/index')

//exportando model
require ('./src/models/Tprodutos')
const Produtos = mongoose.model("produtos")

//rota simples:
Rotas.get('/', async (req,res) =>  {
    const Mostrar = await Produtos.find();
    const Mostrarjson = await Mostrar;
    res.json(Mostrarjson)
})


//só necessito do get, porém utilizei o post para inserir os produtos no banco de dados Nosql
/*Rotas.post('/', (req,res) => {
    const inserindoProduto = new Produtos ({
        nome:req.body.nome,
        descricao:req.body.descricao,
        imagem:req.body.imagem,
        preco:req.body.preco
    })
    inserindoProduto.save();
    res.json({
        message:"Usuário cadastrado com sucesso",
        produto:inserindoProduto
    })
})
*/ 

module.exports = Rotas