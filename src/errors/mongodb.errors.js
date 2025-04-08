const notFoundError = (res) => {
    return res.status(404).send("Essa tarefa não foi encontrada!!!");
};
const objectIdError = (res) => {
    return res.status(500).send("Ocorreu um erro ao recuperar esse dado!!");
};
module.exports = {
    notFoundError,
    objectIdError,
};
