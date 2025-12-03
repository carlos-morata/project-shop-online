const userModels = require('../models/userModels');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Creación de Usuario
const createUser = async(username, email, password, rol = 'user') => {

    if(!username || !email || !password) {
        return res.status(400).json({ message: "Faltan datos obligatorios para registrar usuario." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userModels.createUser(username, email, hashedPassword, rol);
    return newUser
}

const logInServices = async(email, password) => {

    const loginUser = await userModels.loginModel(email, password);
    if(!email || !password) return res.status(400).json({ message: "Email y Password incompletos" });

    const validatePassword = await bcrypt.compare(password, user.password);
    if(!validatePassword) return res.status(401).json({ message: "Credenciales incorrectas" });

    const token = jwt.sign(
        {id: loginUser.user_id, email: user.email},
        process.env.JWT_SECRET,
        { expiresIn: '10 días' }
    );
    return { loginUser, token }
}

module.exports = {
    createUser,
    logInServices
}