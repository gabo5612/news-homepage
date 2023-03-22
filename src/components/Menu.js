import React, { useState } from "react";
import MediaQuery from "react-responsive";
import "../style/Menu.css";
import hamburger from "../assets/icon-menu.svg";
import closeHamburger from "../assets/icon-menu-close.svg";


function Menu() {
   
        const [imgSrc, setImgSrc]= useState(hamburger)
        const [menuMobileStyle, setMenuMobileStyle]= useState('closeMobileUl')
        const [background, setBackground ]= useState('fondo')
        
        const handleClick= () =>{
           
            if(imgSrc===hamburger){
                setImgSrc(closeHamburger)
                setMenuMobileStyle('openMobileUl')
                setBackground('darkBackground')
            } else{
               setImgSrc(hamburger)
               setMenuMobileStyle('closeMobileUl')
               setBackground('noDarkBackgroundd')
            }
            
    }   	
      

  const mediaQueryChange = (matches) => {};
  

  return (
    <div className={background}>
      <MediaQuery maxWidth={900} onChange={mediaQueryChange}>
        <div className="mobileContainer">
        <img src={imgSrc} alt="Menu" onClick={handleClick} className='hamburgerMenu' />
        <ul className={menuMobileStyle} >
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#New">New</a>
          </li>
          <li>
            <a href="#Popular">Popular</a>
          </li>
          <li>
            <a href="#Trending">Trending</a>
          </li>
          <li>
            <a href="#Categories">Categories</a>
          </li>
        </ul>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={901} onChange={mediaQueryChange}>
        <div className="desktopContainer">
        <ul className="desktopUl">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#New">New</a>
          </li>
          <li>
            <a href="#Popular">Popular</a>
          </li>
          <li>
            <a href="#Trending">Trending</a>
          </li>
          <li>
            <a href="#Categories">Categories</a>
          </li>
        </ul>
        </div>
      </MediaQuery>
    </div>
  );
    
}

export { Menu };
