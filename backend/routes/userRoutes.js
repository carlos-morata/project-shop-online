const express = require('express');
const router = express.Router();
const userControllers = require("../controllers/userControllers");

// http://localhost:3000/api/signup -> Registrar Usuario
router.post('/api/signup', userControllers.createUser);

// http://localhost:3000/api/login -> Inicio de Sesión Usuario
router.post('/api/login', userControllers.login);

// http://localhost:3000/api/logout -> Cierre de Sesión Usuario
router.post('/api/logout', userControllers.logout);

module.exports = router;