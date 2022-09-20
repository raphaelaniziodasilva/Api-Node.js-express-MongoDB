// Aqui vamos utilizar todas as rotas que precisar

// importando o express
import express from "express";

// importando a rota de livros
import livros from "./livrosRoutes.js"

// importando a rota de autores
import autores from "./autoresRoutes.js"

/* aqui vamos criar as nossas rotas. O que qui são as rotas? = E o conjunto de todas as rotas que vamos usar

Quando for usar a rota no app temos que passar um parametro que vai ser o proprio app para poder usar o que tiver de rotas aqui 
*/
const routes = (app) => { 

  // vamos usar as rotas de livros e autores 
  app.use(
    express.json(), // trabalhando com json
    livros, // rota de livro
    autores // rota de autores
  )
}
// exportando o arquivo index
export default routes

// Agora va para o arquivo app.js importar o arquivo de rotas e usar