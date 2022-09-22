// Aqui vamos criar o CRUD de livros

// importando o modelo de livro
import livros from "../models/Livro.js";


class LivroController {  
  // listando todos os livros
  static listarLivros = (req, res) => {
    livros.find()
      // Vamos popular o campo autor que vai pegar todo o objeto autor e vai mostrar para nos
      .populate('autor')
      .exec((err, livros) => {      
      return res.status(200).json(livros)        
  })    
    // Agora vamos incluir o metodo listarLivros na rota de livro
  }

  // listando um unico livro
  static listarLivroPorId = (req, res) => {
    const id = req.params.id;
    livros.findById(id)

      // Aqui vamos fazer diferente vamos popular o campo autor e em vez de receber todo o objeto do autor eu vou escolher quais as informações eu vou receber no momento eu quero receber so o nome do autor 
      .populate('autor', 'nome')
      .exec((err, livros) => {
      if(err) {
        return res.status(400).send({message: ` Id do livro não localizado.`})
      } else {
        return res.status(200).send(livros);
      }
    })
    // Agora vamos incluir o metodo listarLivroPorId na rota de livro
  }

  // cadastrando livros
  static cadastrarLivro = (req, res) => {
    /* criando uma variavel livro aonde vai criar um novo modelo (Schema) de livro de acordo com o que veio no body = corpo da requisição. 
    new livros --> livros e o que representa a nossa coleção: collection
    */
    let livro = new livros(req.body);
       
    // salvando os dados do livro no banco de dados. Se caso as informações não forem salvas corretamente vai acontecer o erro
    livro.save((err) => {
      // se acontecer algum erro
      if(err) {
        return res.status(500).send({message: `falha ao cadastrar livro.`})
      } else {
        // se não tiver nenhum erro vai enviar as informações do livro cadastrado para o usuario. toJSON --> vai converter para json e enviar para o usuario
        return res.status(201).send(livro.toJSON())

        // Agora vamos incluir o metodo cadastrarLivro na rota de livro
      }
    })
  }

  // Editar livro ou atualizar
  static atualizarLivro = (req, res) => {

    // pegando o id que vier como parametro na requisição
    const id = req.params.id;

    /* pegando a coleção: collection de livros usando o metodo findByIdAndUpdate

    findByIdAndUpdate --> que vai localizar pelo id e atualizar passando dentro desse metodo o id que vai ser atualizado e as informações que vem do body da requisição

    Quando vamos fazer alguma atualização no mongo usamos uma palvra reservada chamada set e o que eu vou mandar para substituir, então vamos colocar o $set: e vou indicar o que vai ser substituido ou seja tudo que vem do body da requisição}
    */ 
    livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {

      // se não for erro vai ser atualizado com sucesso
      if(!err) {
        return res.status(200).send({message: 'Livro atualizado com sucesso'})
      } else {
        return res.status(500).send({message: err.message})
      }
    })
    // Agora vamos incluir o metodo atualizarLivro na rota de livro
  }

  // deletando livro
  static excluirLivro = (req, res) => {
    const id = req.params.id;

    /* pegando a coleção de livros e usando o metodo findByIdAndDelete
    findByIdAndDelete --> vai localizar pelo id e excluir o livro
    */
    livros.findByIdAndDelete(id, (err) => {
      // se não acontecer nehum erro vai excluir o livro
      if(!err){
        return res.status(200).send({message: 'Livro removido com sucesso'})
      } else {
        return res.status(500).send({message: err.message})
      }
    })
    // Agora vamos incluir o metodo excluirLivro na rota de livro
  }

  // listando todos os livros de uma determinada editora
  static listarLivroPorEditora = (req, res) => {

    // criando a variavel editora que vai receber o que vier na url como query parametro
    const editora = req.query.editora

    // vamos filtrar pelo campo editora ou seja vai localizar o que a 'editora' for igual a variavel editora
    livros.find({'editora': editora}, {}, (err, livros) => {
      return res.status(200).send(livros);
    })
    // Agora vamos incluir o metodo listarLivroPorEditora na rota de livro
  }
  
}
export default LivroController

// Precisams de um arquivo de rotas de livro que vai ficar na pasta routes para utilizarmos os metodos http