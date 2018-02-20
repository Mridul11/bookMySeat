//action to disptach and get the form details
export function submitForm(data){
    return{
        type : "SUBMIT_FORM",
        payload : data
    }
}

