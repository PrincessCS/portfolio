import React from "react";
import { Link } from "react-router-dom";

function Nav(){
    return(
        <>
           <nav>
               <div className="logo-name">
                    <h1>Chidera.</h1>
               </div>
            <div className="nav-links">
                  <ul>
                    <li><Link to='/'>Intro</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                  </ul>
            </div>
       
         </nav>
        </>
     
    );
}

export default Nav;