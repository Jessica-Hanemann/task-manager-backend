const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const SECRET = process.env.JWT_SECRET || "minha_chave_secreta";

// Criar token
const generateToken = (user) => {
    return jwt.sign({ id: user._id }, SECRET, { expiresIn: "7d" });
};

// Cadastro
exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists)
            return res.status(400).json({ error: "Email já cadastrado" });

        const user = await User.create({ name, email, password });
        res.status(201).json({
            user: { id: user._id, name: user.name, email: user.email },
            token: generateToken(user),
        });
    } catch (err) {
        res.status(500).json({ error: "Erro no cadastro" });
    }
};

// Login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ error: "Email ou senha inválidos" });
        }

        res.json({
            user: { id: user._id, name: user.name, email: user.email },
            token: generateToken(user),
        });
    } catch (err) {
        res.status(500).json({ error: "Erro no login" });
    }
};
