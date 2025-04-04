const mongoose = require("mongoose");

const connectToDataBase = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.zceg3va.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
        ),
            console.log("MongoDB conectado");
    } catch (error) {
        console.error("Erro ao conectar");
    }
};

module.exports = connectToDataBase;
