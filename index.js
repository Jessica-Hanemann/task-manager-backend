const express = require("express");
const dotenv = require("dotenv");
//passamos todas as rotas pra outro arquivo então puxamos aqui
const TaskRouter = require("./src/routes/task.routes");

const connectToDataBase = require("./src/database/mongoose.database");

dotenv.config();

const app = express();
app.use(express.json());
connectToDataBase();

//e vamos chamar as rotas todas as vezes que tiver /tasks
app.use("/tasks", TaskRouter);

app.listen(8000, () => console.log("escutando porta 8000"));
