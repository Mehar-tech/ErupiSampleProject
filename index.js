const express = require('express')
const app = express()
const port = 5000
app.get("/api", (req,res) =>{
    res.json({"User":["userOne", "userTwo", "userThree"]})
})

app.listen(port, () => {
    console.log("Sever is runing at "+port);
})