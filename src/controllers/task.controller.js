// import TaskModel from "../models/task.model";
const TaskModel = require("../models/task.model");

class TaskController {
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }

    //primeiro metodo - pegar as tarefas
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
}
module.exports = TaskController;
