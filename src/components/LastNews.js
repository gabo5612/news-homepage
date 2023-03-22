import React from "react";
import '../style/LastNews.css'
const listOfNews =[
    {   
        c:'uno',
        title:'Hydrogen VS Electric Cars',
        p:'Will hydrogen-fueld cars even catch up to EVs?'
    }, 
    {  
        c:'dos',
        title:'The Downsides of AI Artistry ',
        p:'What are the possible adverse effects of on-demand AI image generation?'
    },
    {   
        c:'tres',
        title:'Is VC Funding Drying Up?',
        p:'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
    }
]
function LastNews(){
    const list= listOfNews.map(listofNew =>
            
                        <div className="LastNewsContent" key={listofNew.c}>
                            <h4>{listofNew.title}</h4>
                            <p className={listofNew.c}>{listofNew.p}</p>
                        </div>
                    
    )
    return(
        <div className="LastNews">
                        <h3>New</h3>
                        {list}
                        </div>
    )
}

export {LastNews}