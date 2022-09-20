// Aqui nos vamos criar o Schema que sera a nossa coleção de documentos 

// importando o mongoose
import mongoose from "mongoose";

// criando um novo Schema
const livroSchema = new mongoose.Schema(

  // definindo os atributos
  {
    id: {type: String},
    titulo: {type: String, required: true},
    autor: {type: String, required: true},
    // mongoose.Schema.Types.ObjectId, ref: 'autores'
    editora: {type: String, required: true},
    numeroPaginas: {type: Number}
  }
);

/* criando um variavel para poder ser exportada e para poder usar em outros arquivos
o nome da minha coleção: "Tabela" no banco de dados vai ser livros

Aqui eu estou dizendo que o meu model vai ter uma coleção: "tabela" de livros e os livros vão seguir o livroSchema esse padrão de tipos e atibutos que criamos 
*/

const livros = mongoose.model('livros', livroSchema);

export default livros;

// Agora vamos criar a nossa pasta controllers e o arquivo livrosController.js para poder adicionar, listar, editare excluir um livro usando os metodos http