import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import { getAllUsers } from "../Redux/Actions"
import CardUser from "./CardUser"

const ListeUser=()=>{

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getAllUsers())
    },[])

    const User = useSelector(state=>state.User)

    return(
        <div className="lol">
            {
                User.map((el)=><CardUser el={el} />)
            }
        </div>
    )
}

export default ListeUser