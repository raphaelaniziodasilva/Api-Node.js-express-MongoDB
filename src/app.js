import express from "express";

// chamando a conexão com o banco de dados
import db from "./config/dbConnect.js"

// importando o arquivo de rotas
import routes from "./routes/index.js"

// criando a conexão com o banco de dados mongodb. Se caso aconteça algum erro de conexão
db.on("error", console.log.bind(console, 'Erro de conexão'))

// abrindo a conexão com o banco de dados
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')
})

const app = express();

app.use(express.json())

// usando a rota importada
routes(app);

export default app

// vamos criar a conexão do banco na pasta config

// Agora vamos criar as entidades na pasta models 