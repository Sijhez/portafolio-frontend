import { useReducer } from "react";
import WorkContext from "./WorkContext";
import WorkReducer from "./WorkReducer";
//import axios to make conection to server
import consultaApi from "../../config/axios";

const myWorksState = (props) =>{
    //initial state
    const initialState = {
        myWorks:[]
    }


const getMyWorks = async()=>{
    const res = await consultaApi.get("user/myWorks")
    console.log("consiguiendo...")
    
    const listado = res.data.data
    dispatchEvent({
        type:"GET_WORKS",
        payload:listado
    })
}

}

export default myWorksState
