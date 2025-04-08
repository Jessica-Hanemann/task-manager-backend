const notFoundError = (res) => {
    return res.status(404).send("Essa tarefa não foi encontrada!!!");
};
module.exports = {
    notFoundError,
};
