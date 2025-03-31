const express = require("express");
const dotenv = require("dotenv");

const connectToDataBase = require("./src/database/mongoose.database");
dotenv.config();

const app = express();
connectToDataBase();

app.get("/", (req, res) => {
    const tasks = [
        {
            description: "estudar",
            isCompleted: false,
        },
    ];
    res.status(200).send(tasks);
});

app.listen(8000, () => console.log("escutando porta 8000"));
