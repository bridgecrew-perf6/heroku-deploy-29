const express = require("express")
const app = express()
app.use(express.json())
app.get("/", (req, res) => { 
    res.send(`hello welcome server src in ${process.env.NAME}`)
})
app.get("/greet", (req, res) => { 
    res.send("good morning guys server")
})
module.exports=app


var flag=true
for (j = 0; j < n; j++) { 
    if (bag[j] != bag[n - 1 - j]) { 
        flag = false
        break
    }
}
if (flag == true) {
    yes
} else { 
    no
}