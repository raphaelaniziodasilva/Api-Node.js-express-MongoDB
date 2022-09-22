// importando o express pois é ele que vai fazer a conexão com os metodos http
import express from "express";

// importando LivroController para usar na rota
import LivroController from "../controllers/livrosController.js";

// usando o roteamento do express
const router = express.Router();

// definindo as rotas, definindo o que vai acontecer a cada rota  
router
  // listando todos os livros 
  .get("/livros", LivroController.listarLivros)

  // listando todos os livros por editora. No postman pesquise = localhost:3000/livros/busca?editora=Alura
  .get("/livros/busca", LivroController.listarLivroPorEditora)

  // listando um unico livro
  .get("/livros/:id", LivroController.listarLivroPorId)

  // cadastrando livro
  .post("/livros", LivroController.cadastrarLivro)

  // atualizando livro
  .put("/livros/:id", LivroController.atualizarLivro)

  // deletando livro
  .delete("/livros/:id", LivroController.excluirLivro)

// exportando a rota de livros para poder usar em outros arquivos
export default router;   

// criar um arquivo index.js aonde vai ser concentrado todas as rotas que vai ser utilizadas na aplicação