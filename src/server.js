const app=require("./index")
var port=process.env.PORT || 5000
app.listen(port, () => {
    console.log(`listening port ${port}`)
})