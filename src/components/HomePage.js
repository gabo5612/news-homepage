import React from "react";
import '../style/HomePage.css'

function HomePage(props){
    return(
        <div className="HomePage">{props.children}</div>
    )
}

export {HomePage}