const express = require("express");
const dotenv = require("dotenv");

const connectToDataBase = require("./src/database/mongoose.database");
const TaskModel = require("./src/models/task.model");

dotenv.config();

const app = express();
app.use(express.json());
connectToDataBase();

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

app.delete("/tasks/:id", async (req, res) => {
    try {
        const taskId = req.params.id;

        const taskToDelete = await TaskModel.findById(taskId);
        if (!taskToDelete) {
            return res.status(500).send("Essa tarefa não foi encontrada");
        }

        const deleteTask = await TaskModel.findByIdAndDelete(taskId);
        res.status(200).send(deleteTask);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(8000, () => console.log("escutando porta 8000"));
