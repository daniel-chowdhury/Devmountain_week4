const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

require("./routes/routes.js")(app)


app.listen(4000, ()=> console.log("Server running on 4000"))