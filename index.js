const express = require("express");
const dotenv = require("dotenv");

const connectToDataBase = require("./src/database/mongoose.database");
const TaskModel = require("./src/models/task.model");

dotenv.config();

const app = express();
app.use(express.json());
connectToDataBase();

//listar
app.get("/tasks", async (req, res) => {
    // procura o registro com determinada condição
    // pra pegar tudo deixar o objeto vazio
    try {
        const tasks = await TaskModel.find({});
        res.status(200).send(tasks);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

//encontrar
app.get("/tasks/:id", async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = await TaskModel.findById(taskId);
        if (!task) {
            return res.status(404).send("Tarefa não encontrada!");
        }
        return res.status(200).send(task);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

//criar
app.post("/tasks", async (req, res) => {
    // console.log(req.body);
    // res.status(200).send("Created!");

    try {
        const newTask = new TaskModel(req.body);
        await newTask.save();
        res.status(201).send(newTask);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

//atualizar
app.patch("/tasks/:id", async (req, res) => {
    try {
        const taskId = req.params.id;
        const taskData = req.body;

        //pegou tarefa
        const taskToUpdate = await TaskModel.findById(taskId);
        //mapeou campos que podem atualizar
        const allowedUpdates = ["isCompleted"];
        //pegou campos que o usuario ta tentatndo  - recebendo no body
        const requestedUpdates = Object.keys(taskData);
        // pra cada campo recebido no body, verifica se a lista de campos permitidos inclui esse campo, se incluir ele pode ser atualizado
        for (update of requestedUpdates) {
            if (allowedUpdates.includes(update)) {
                taskToUpdate[update] = taskData[update];
            } else {
                return res
                    .status(500)
                    .send("Um ou mais campos não são editáveis");
            }
        }

        await taskToUpdate.save();
        return res.status(200).send(taskToUpdate);
        // const updatedTask = await TaskModel.findByIdAndUpdate(taskId, taskData);
        // return res.status(200).send(updatedTask);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

//deletar
app.delete("/tasks/:id", async (req, res) => {
    try {
        const taskId = req.params.id;

        const taskToDelete = await TaskModel.findById(taskId);
        if (!taskToDelete) {
            return res.status(404).send("Essa tarefa não foi encontrada");
        }

        const deleteTask = await TaskModel.findByIdAndDelete(taskId);
        res.status(200).send(deleteTask);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(8000, () => console.log("escutando porta 8000"));
