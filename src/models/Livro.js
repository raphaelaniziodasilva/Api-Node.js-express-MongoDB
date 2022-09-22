// Aqui nos vamos criar o Schema que sera a nossa coleção de documentos 
// importando o mongoose
import mongoose from "mongoose";

// criando um novo Schema
const livroSchema = new mongoose.Schema(
  // definindo os atributos
  {
    id: {type: String},
    titulo: {type: String, required: true},
   // autor: {type: String, required: true}, --> antes de fazer a associação

   /* Vamos associar as entidades livro e autor, a ideia e fazer a associação e quando for cadastrar um livro em vez de colocar nome do autor eu vou colocar o id do autor

   Quando o livro for listado pelo metodo get vai acontecer essa associação que vai me motrar o nome, nacionalidade e todos os campos que estiver definidos para o autor

   No autor em vez de colocar o type como String vamos colocar que ele é uma referencia para o modelo de autor trocando a String por mongoose.Schema.Types.ObjectId, porque vai ser o id de um objeto a referencia que vai entrar e um id de outro objeto

   Temos que colocar outro parâmetro que vai ser a referencia e o nome da entidade = ref:'autores'
   */
    autor: {type: mongoose.Schema.Types.ObjectId, ref:'autores', required: true},

    // Com a associação de livro e autor feita vamos ir la no livrosController.js vamos precisar usar um comando chamado populate para ele popular os dados com a informação que queremos

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