const { Schema, model } = require("mongoose");

//criar schemas
const TaskSchema = Schema({
    description: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

const TaskModel = model("Task", TaskSchema);

module.exports = TaskModel;
