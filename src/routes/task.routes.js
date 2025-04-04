const express = require("express");

const TaskController = require("../controllers/task.controller");
const router = express.Router();

//listar
//como colocamos o /tasks no index aqui podemos tirar e deixar a /
//a função foi para o controler
router.get("/", async (req, res) => {
    return new TaskController(req, res).getTasks();
});

//encontrar
router.get("/:id", async (req, res) => {
    return new TaskController(req, res).findTask();
});

//criar
router.post("/", async (req, res) => {
    return new TaskController(req, res).createTask();
});

//atualizar
router.patch("/:id", async (req, res) => {
    return new TaskController(req, res).updateTask();
});

//deletar
router.delete("/:id", async (req, res) => {
    return new TaskController(req, res).deleteTask();
});

module.exports = router;
