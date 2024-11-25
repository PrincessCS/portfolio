import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";


function Intro(){
    return(
        <>
      

        <section className="hero-container">
            <Nav/>
            <div className="hero-left">
                <p>Hello</p>
                <h2>I'm Chidera Odo, <br/>a Frontend Web Developer.</h2>

                 <div className="hero-btns">
                 <Link to='/about'> <button type="button" className="cta-btn about">More About Me</button></Link>
                 <Link to='/contact'><button type="button" className="cta-btn contact">Get in Touch</button></Link>
                 </div>  
            </div>

            <div className="hero-right">
                <img src="./intro-bg.jpg" alt="photo-of-chidera" />
                <div className="hero-right-btns">
                    <button type="download" className="cta-btn">Get My Resume</button>
                </div>

                <div className="hero-social-icons">
                   <svg width="50" height="50" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M65 29.7059C63.5277 30.5294 61.9407 31.0706 60.2964 31.3294C61.979 30.0824 63.2792 28.1059 63.891 25.7294C62.304 26.9059 60.5449 27.7294 58.6903 28.2C57.1797 26.1765 55.0574 25 52.6482 25C48.1549 25 44.4837 29.5176 44.4837 35.0941C44.4837 35.8941 44.5602 36.6706 44.6941 37.4C37.8872 36.9765 31.826 32.9529 27.7916 26.8588C27.0841 28.3412 26.6826 30.0824 26.6826 31.9176C26.6826 35.4235 28.1166 38.5294 30.3346 40.2941C28.9771 40.2941 27.7151 39.8235 26.6061 39.1176V39.1882C26.6061 44.0824 29.4359 48.1765 33.1836 49.0941C31.9804 49.4993 30.7172 49.5557 29.4933 49.2588C30.0126 51.2647 31.0297 53.0198 32.4016 54.2775C33.7734 55.5352 35.4311 56.2322 37.1415 56.2706C34.2421 59.0951 30.6482 60.6219 26.9503 60.6C26.3002 60.6 25.6501 60.5529 25 60.4588C28.6329 63.3294 32.9541 65 37.5813 65C52.6482 65 60.9273 49.6118 60.9273 36.2706C60.9273 35.8235 60.9273 35.4 60.9082 34.9529C62.5143 33.5412 63.891 31.7529 65 29.7059Z" fill="#808080"/>
                   </svg>
                </div>
            </div>


        </section>
        </>
    );
}

export default Intro;