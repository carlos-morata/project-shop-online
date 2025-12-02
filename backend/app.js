const express = require("express")
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Servidor backend -> http://localhost:${port}`)
})

module.exports = app;