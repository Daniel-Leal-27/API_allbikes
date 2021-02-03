const mongoose = require ('mongoose')

function conexao(){
    mongoose.connect("mongodb://localhost/allbikes02",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).then(()=>{
          console.log("Conexao realizada com sucesso ")
      }).catch((erro)=>{
          console.log(`Houve um erro inexperado: ${erro}`);
      })
}

module.exports = conexao()