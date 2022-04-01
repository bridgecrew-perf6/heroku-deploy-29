const express = require("express")
const app = express()
app.use(express.json())
app.get("/", (req, res) => { 
    res.send("hello welcome")
})
app.get("/greet", (req, res) => { 
    res.send("good morning guys")
})
var port=process.env.PORT || 5000
app.listen(port, () => {
    console.log(`listening port ${port}`)
})