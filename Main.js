const express = require('express')
const connectDB = require('./Config/ConnectDB')
const UserRoute = require('./Routes/User')

const app=express()

const port = 5000

app.use(express.json())
app.use('/api/user', UserRoute)


connectDB()




app.listen(port, console.log(`Server is running on the port ${port}`))