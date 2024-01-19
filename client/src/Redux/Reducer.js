import { GETALLUSERS, GETONEUSER } from "./ActionTypes"

const initialState={
    User : [],
    OneUser : {}
}


const Reducer=(state=initialState, action)=>{
    switch (action.type) {
        case  GETALLUSERS : return {...state, User : action.payload} 
        case GETONEUSER : return {...state, OneUser : action.payload}
        default: return state
    }
}

export default Reducer