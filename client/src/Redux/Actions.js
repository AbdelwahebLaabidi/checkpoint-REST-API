import { GETALLUSERS, GETONEUSER } from "./ActionTypes"
import axios from 'axios'

export const getAllUsers=()=>async(dispatch)=>{
    try {
        
        const res = await axios.get('/api/user/getAllUsers')

        dispatch({
            type : GETALLUSERS,
            payload : res.data.AllUsers
        })
    } catch (error) {
        console.log(error)
    }
}

export const addUser=(newUser,navigate)=>async(dispatch)=>{
    try {
        
        await axios.post('/api/user/addUser', newUser)

        dispatch(getAllUsers())
        navigate('/ListeUser')

    } catch (error) {
        console.log(error)
    }
}

export const deleteUser=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/user/deleteUser/${id}`)
        dispatch(getAllUsers())

    }  catch (error) {
    console.log(error)
}
}

export const getOneUser=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/user/getOneUser/${id}`)
        dispatch({
            type : GETONEUSER,
            payload : res.data.OneUser
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateUser=(id,OneUser,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/user/updateUser/${id}`,OneUser)

        dispatch(getOneUser())

        navigate('/ListeUser')
    } catch (error) {
        console.log(error)
    }
}