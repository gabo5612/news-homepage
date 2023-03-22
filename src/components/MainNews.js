import React from "react";
import '../style/MainNews.css'

function MainNews(){
    return(
        <div className="MainNews">
            <div className="MainNewsTopSide">
            
            </div>
            
            <div className="MainNewsBottonSide">
                <div className="bottonTitle">
                    <h1>The Bright Future of Web 3.0?</h1>
                </div>
                <div className="bottoninfo">
                    <p> We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                    <button>READ MORE</button>
                </div>
            </div>
        </div>
    )
}

export {MainNews}