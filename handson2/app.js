const express = require('express')
const employeeRouter = require('./routes/employee')
const app = express()

app.use(express.json())
app.use(employeeRouter)


app.listen(8080, () => {
    console.log("server is running at port 8080")
    
})