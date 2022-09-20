// Aqui vamos criar o CRUD de livros

// importando o modelo de livro
import livros from "../models/Livro.js";

class LivroController {
  
  // listando todos os livros
  static listarLivros = (req, res) => {
    livros.find()
      .populate('autor')
      .exec((err, livros) => {
       return res.status(200).json(livros)
  })
      // Agora vamos incluir o metodo listar livros na rota de livro
  }

  static listarLivroPorId = (req, res) => {
    const id = req.params.id;

    livros.findById(id)
      .populate('autor', 'nome')
      .exec((err, livros) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id do livro não localizado.`})
      } else {
        res.status(200).send(livros);
      }
    })
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
        return res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`})
      } else {
        // se não tiver nenhum erro vai enviar as informações do livro cadastrado para o usuario. toJSON --> vai converter para json e enviar para o usuario
        return res.status(201).send(livro.toJSON())

        // Agora vamos incluir o metodo cadastrar na rota de livro
      }
    })
  }

  static atualizarLivro = (req, res) => {
    const id = req.params.id;

    livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Livro atualizado com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static excluirLivro = (req, res) => {
    const id = req.params.id;

    livros.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'Livro removido com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static listarLivroPorEditora = (req, res) => {
    const editora = req.query.editora

    livros.find({'editora': editora}, {}, (err, livros) => {
      return res.status(200).send(livros);

    })
  }



}
export default LivroController

// Precisams de um arquivo de rotas de livro que vai ficar na pasta routes para utilizarmos os metodos http