const mongoose = require ('mongoose')
const Schema = mongoose.Schema;

//início da criação da tabela produto
const Produtos = new Schema({
    nome:{
        type:String,
        required:true,
    },
    descricao:{
        type:String,
        required:true,
    },
    imagem:{
        type:String,
        required:true,
    },
    preco:{
        type:Number,
        required:true,
    }
}) 

mongoose.model ("produtos", Produtos);