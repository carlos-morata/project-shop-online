const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;

require('./config/db_sql');
app.use(express.json());

// Importar Rutas de Usuarios
const userRoutes = require('./routes/userRoutes');
app.use('/', userRoutes);

app.listen(port, () => {
  console.log(`Servidor backend -> http://localhost:${port}`)
})

module.exports = app;