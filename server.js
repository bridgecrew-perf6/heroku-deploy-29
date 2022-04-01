const express = require("express")
const app = express()
app.use(express.json())
app.get("/", (req, res) => { 
    res.send("hello welcome server")
})
app.get("/greet", (req, res) => { 
    res.send("good morning guys server")
})
var port=process.env.PORT || 5000
app.listen(port, () => {
    console.log(`listening port ${port}`)
})