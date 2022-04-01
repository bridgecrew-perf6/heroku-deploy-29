const express = require("express")
const app = express()
app.use(express.json())
var port=process.env.PORT || 5000
app.listen(port, () => {
    console.log(`listening port ${port}`)
})