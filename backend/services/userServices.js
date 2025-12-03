const userModels = require('../models/userModels');
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

module.exports = {
    createUser
}