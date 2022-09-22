import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router
  // listando todos os autores 
  .get("/autores", AutorController.listarAutores)

  // listando um autor
  .get("/autores/:id", AutorController.listarAutorPorId)

  // criando autor 
  .post("/autores", AutorController.cadastrarAutor)

  // editando autor 
  .put("/autores/:id", AutorController.atualizarAutor)

  // excluindo autor 
  .delete("/autores/:id", AutorController.excluirAutor)

export default router;   