import React from "react";
import '../style/HeaderRightSide.css'

function HeaderRightSide(props){
   
    return(
        <div className="HeaderRightSide">
            {props.children}
        </div>
    )
}

export {HeaderRightSide}