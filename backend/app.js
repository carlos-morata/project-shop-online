const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;

require('./config/db_sql');



app.listen(port, () => {
  console.log(`Servidor backend -> http://localhost:${port}`)
})

module.exports = app;