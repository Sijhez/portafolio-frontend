const reducer = (globalState, action) =>{

    switch(action.type){
        case "GET_WORKS":
            return {
                ...globalState,
                myWorks:action.payload
            }
        default:
            return globalState
    }

}
export default reducer