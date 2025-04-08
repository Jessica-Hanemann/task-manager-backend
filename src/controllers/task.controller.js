// import TaskModel from "../models/task.model";
const TaskModel = require("../models/task.model");
const { notFoundError } = require("../errors/mongodb.errors");

class TaskController {
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }

    //primeiro metodo - pegar as tarefas
    //listar
    async getTasks() {
        // procura o registro com determinada condição
        // pra pegar tudo deixar o objeto vazio
        try {
            const tasks = await TaskModel.find({});
            this.res.status(200).send(tasks);
        } catch (error) {
            this.res.status(500).send(error.message);
        }
    }
    //encontrar
    async findTask() {
        try {
            const taskId = this.req.params.id;
            const task = await TaskModel.findById(taskId);
            if (!task) {
                return notFoundError(this.res);
            }
            return this.res.status(200).send(task);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    //criar
    async createTask() {
        // console.log(req.body);
        // res.status(200).send("Created!");
        try {
            const newTask = new TaskModel(this.req.body);
            await newTask.save();
            this.res.status(201).send(newTask);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    //atualizar
    async updateTask() {
        try {
            const taskId = this.req.params.id;
            const taskData = this.req.body;

            //pegou tarefa
            const taskToUpdate = await TaskModel.findById(taskId);
            if (!taskToUpdate) {
                return notFoundError(this.res);
            }
            //mapeou campos que podem atualizar
            const allowedUpdates = ["isCompleted", "description", "usuario"];
            //pegou campos que o usuario ta tentatndo  - recebendo no body
            const requestedUpdates = Object.keys(taskData);
            // pra cada campo recebido no body, verifica se a lista de campos permitidos inclui esse campo, se incluir ele pode ser atualizado
            for (const update of requestedUpdates) {
                if (allowedUpdates.includes(update)) {
                    taskToUpdate[update] = taskData[update];
                } else {
                    return this.res
                        .status(500)
                        .send("Um ou mais campos não são editáveis");
                }
            }

            await taskToUpdate.save();
            return this.res.status(200).send(taskToUpdate);
            // const updatedTask = await TaskModel.findByIdAndUpdate(taskId, taskData);
            // return res.status(200).send(updatedTask);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    //deletar
    async deleteTask() {
        try {
            const taskId = this.req.params.id;

            const taskToDelete = await TaskModel.findById(taskId);
            if (!taskToDelete) {
                return notFoundError(this.res);
            }

            const deleteTask = await TaskModel.findByIdAndDelete(taskId);
            this.res.status(200).send(deleteTask);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}
module.exports = TaskController;
