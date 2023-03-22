import React from "react";
import '../style/Header.css'

function Header(props){
    return(
        <div className="Header">{props.children}</div>
    )
}

export {Header}