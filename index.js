const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
//passamos todas as rotas pra outro arquivo então puxamos aqui
const TaskRouter = require("./src/routes/task.routes");

const connectToDataBase = require("./src/database/mongoose.database");

dotenv.config();

const app = express();
app.use(express.json());
connectToDataBase();
app.use(cors());

//e vamos chamar as rotas todas as vezes que tiver /tasks
app.use("/tasks", TaskRouter);

// app.listen(8000, () => console.log("escutando porta 8000"));
// const port = process.env.PORT || 8000;
// app.listen(port, () => console.log(`escutando porta ${port}`));
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Escutando porta ${port}!`));
