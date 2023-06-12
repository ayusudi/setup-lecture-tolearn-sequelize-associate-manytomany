const express = require("express")
const app = express()
const port = 3000 

app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.use(require("./routes/index.js"))

app.listen(port, () => {
  console.log("Aplikasi telah berjalan");
})