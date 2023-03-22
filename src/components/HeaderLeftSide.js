import React from "react";
import '../style/HeaderLeftSide.css'
import logo from '../assets/logo.svg'

function HeaderLeftSide(){
    return(
        
        <img src={logo} alt='Logo' className="HeaderLeftSide"/>
    )
}

export {HeaderLeftSide}