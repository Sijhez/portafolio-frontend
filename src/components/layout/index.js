import React from "react";
//import permanent component
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const index = () =>{
    return(
        <>
        <Header/>
         <Outlet/>
        <Footer/>
        </>
    )
}
export default index