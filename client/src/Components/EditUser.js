import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneUser, updateUser } from '../Redux/Actions';
import { useNavigate, useParams } from 'react-router-dom';


const EditUser=()=>{

    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {id} = useParams()

    useEffect(()=>{
        dispatch(getOneUser(id))
    },[])

    const OneUser = useSelector(state=>state.OneUser)

    const [name, setName]= useState(OneUser.name)
    const [age, setAge] = useState(OneUser.age)
    const [email, setEmail] = useState(OneUser.email)
    const [phoneNumber, setPhoneNumber]= useState(OneUser.phoneNumber)

    useEffect(()=>{
        setName(OneUser.name)
        setAge(OneUser.age)
        setEmail(OneUser.email)
        setPhoneNumber(OneUser.phoneNumber)
    },[OneUser])
    
    const handleAdd=(e)=>{
        e.preventDefault()
        dispatch(updateUser(id,{name, age, email,phoneNumber}, navigate ))
    }

    return(
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Add Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Age</Form.Label>
                    <Form.Control value={age} onChange={(e)=>setAge(e.target.value)} type="number" placeholder="add Age" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>PhoneNumber</Form.Label>
                    <Form.Control value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} type="number" placeholder="Add phoneNumber" />
                </Form.Group>
            
                <Button onClick={(e)=>handleAdd(e)} variant="success">Add</Button>

            </Form>
        </div>
    )
}

export default EditUser