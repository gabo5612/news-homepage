import React from "react";
import '../style/MiniNewsContainer.css'

function MiniNewsContainer(props){
    return(
        <div className="MiniNewsContainer">{props.children}</div>
    )
}

export {MiniNewsContainer}