const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user.model");

// registro
router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    if (await User.findOne({ email })) {
        return res.status(400).json({ message: "E-mail já usado" });
    }
    await new User({ name, email, password }).save();
    res.status(201).json({ message: "Usuário criado" });
});

// login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({ message: "Credenciais inválidas" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "2h",
    });
    res.json({ token, name: user.name });
});

module.exports = router;
