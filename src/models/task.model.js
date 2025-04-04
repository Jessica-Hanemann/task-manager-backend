const { Schema, model } = require("mongoose");

//criar schemas
const TaskSchema = Schema({
    usuario: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
});

const TaskModel = model("Task", TaskSchema);

module.exports = TaskModel;
