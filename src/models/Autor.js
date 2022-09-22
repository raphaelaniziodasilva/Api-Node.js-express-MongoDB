import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {type: String, required: true},
    nacionalidade: {type: String}
  },
  {
    // versionKey ele versiona os modelos 
    versionKey: false
  }
)

// criando uma constante autores para associar com o schema e o nome da colleção: collection --> autores vai ser o nome da tabela
const autores = mongoose.model("autores", autorSchema)

export default autores;