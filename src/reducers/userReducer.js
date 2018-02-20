const initialUser = {
    name : "",
    mobileNo : "",
    venue : "",
    date : "",
    time : ""
}

//creating reducer for user store and dispatching action .
const userData = (state = initialUser, action)=>{
    switch(action.type)
    {
        case "SUBMIT_FORM":
            state = {...state, 
                state : action.payload
            }
            break;
    }
    return state
}

export default userData;