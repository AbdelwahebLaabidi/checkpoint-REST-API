const express = require('express')
const User = require('../Models/User')
const {AddUser, deleteUser, updateUser, getOneUser, getAllUser } = require('../Controllers/User')

const UserRoute = express.Router()


UserRoute.post('/addUser', AddUser)


UserRoute.get('/getAllUsers', getAllUser )

UserRoute.delete('/deleteUser/:id', deleteUser)

UserRoute.put('/updateUser/:id', updateUser)

UserRoute.get('/getOneUser/:id', getOneUser)



module.exports = UserRoute