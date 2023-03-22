import React from "react";
import '../style/MiniNews.css'
import img1 from '../assets/image-retro-pcs.jpg'
import img2 from '../assets/image-top-laptops.jpg'
import img3 from '../assets/image-gaming-growth.jpg' 
const mininews=[
    {   
        img: img1,
        number:'01',
        title:'Reviving Retro PCs',
        p: 'What happens when old PCs are given modern upgrades'
    },
    {   
        img: img2,
        number: '02',
        title: 'Top 10 Laptops of 2022',
        p: ' Our best picks for varous needs and budgets'
    },
    {   
        img: img3,
        number: '03',
        title: 'The Growth of Gaming',
        p: 'How the pandemic has sparked fresh opportunities'
    }
]
function MiniNews(){
    const mininewslist= mininews.map(mininew=>
        <div className="MiniNews" key={mininew.number}>
            <div className="MiniNewsImg"><img src={mininew.img} alt='img News'/></div>
            <div className="MiniNewsInfo">
                <span>{mininew.number}</span>
                <h5>{mininew.title}</h5>
                <p>{mininew.p}</p>

            </div>

        </div>
        )
    return(
        <React.Fragment>{mininewslist}</React.Fragment>
    )
}

export {MiniNews}