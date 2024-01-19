const User = require("../Models/User")

exports.AddUser = async(req,res)=>{
        try {
            const foundUser = await User.findOne({
                $or: [
                    { email: req.body.email },
                    { phoneNumber: req.body.phoneNumber }
                ]
            })
            
            if (foundUser) {
                const errorMessage = foundUser.email === req.body.email ? 'email already Used' : 'phoneNumber already Used';
                return res.status(400).send({ status: 400, message: errorMessage })
            }
    
                const newUser = new User(req.body)
                
                await newUser.save()
                res.status(200).send({status : 200, message : 'User is added', newUser})
        } catch (error) {
                res.status(500).send({status : 500, message : 'Could not add User' })
        }
    }


    exports.getAllUser= async(req,res)=>{
        try {
                const AllUsers = await User.find()
                res.status(200).send({status : 200, message : 'All Users are geted', AllUsers})
        } catch (error) {
            res.status(500).send({status : 500, message : 'Could Not Get Users'})
        }
    }

    exports.deleteUser = async(req,res)=>{
        try {
            const {id} = req.params
    
            const deleteUser = await User.findByIdAndDelete(id)
            res.status(200).send({status : 200, messge : 'User is deleted', deleteUser})
        } catch (error) {
            res.status(500).send({status : 500, message : 'Could Not delete User'})
        }
    }

    exports.updateUser = async(req,res)=>{
        try {
            const {id}= req.params
            await User.findByIdAndUpdate(id,{$set : req.body})
            res.status(200).send({status : 200, message : 'User Updated'})
    
        } catch (error) {
            res.status(500).send({status : 500, message : 'Could Not update User'})
    
        }
    }

    exports.getOneUser = async(req, res)=>{
        try {
            const {id}=req.params
            const OneUser = await User.findById(id)
    
            res.status(200).send({status : 200, message : 'User is geted', OneUser})
    
        } catch (error) {
            res.status(500).send({status : 500, message : 'Could Not get the User'})
    
        }
    }