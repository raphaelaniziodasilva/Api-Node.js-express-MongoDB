// fazendo a conexão com o bamco de dados NoSql MongoDB

// importando o mongoose
import mongoose from "mongoose"

// conectando e passando a string de conexão
mongoose.connect("mongodb://localhost:27017/mongoDB-node");

// criando a variavel db para exportar que vai receber a conexão com o mongoose
let db = mongoose.connection;

// exportando o db
export default db;

// para poder fazer a conexão va para o arquivo app.js 
