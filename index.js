const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
//passamos todas as rotas pra outro arquivo então puxamos aqui
const TaskRouter = require("./src/routes/task.routes");

const connectToDataBase = require("./src/database/mongoose.database");

dotenv.config();

const app = express();
app.use(express.json()); //fala pro express que vamos receber json nas requisições, já converte o json para objeto javascript automaticamente
connectToDataBase(); //Função executada quando iniciar o servidor
app.use(cors()); //permite conexão de outros locais (necessário para integrar com o front-end)

//e vamos chamar as rotas todas as vezes que tiver /tasks
app.use("/tasks", TaskRouter);

//alteração pra escutar tanto a porta localhost quanto a do render
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Escutando porta ${port}!`));
