import React from 'react';


function Contact(){
    return(
        <>
        <section className='contact-container'>
          
            
        <div className="contact-header">
                <h1>03</h1>
                <h2>Get In Touch.</h2>
        </div>


        <div className='contact-flex-container'>
            <div className='contact-left'>
                <p>Lorem ipsum dolor sit amet consectetur <br/>
                adipisicing elit. Voluptas illum quasi facere libero, <br/>
                 fugiat laboriosam possimus amet consectetur <br/>
                 adipisicing elit reprehenderit eveniet tempore <br/>
                  quisquam ipsa id esse. Facere ratione dignissimos.</p>
            </div>

            <div className='contact-center'>
                <h2>Follow Me</h2>
                <ul>
                    <li>Linkedin</li>
                    <li>GitHub</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </div>

            <div className='contact-right'>
                <h2>Contact Me</h2>
                <p>princeschidera@gmail.com</p>
                <p>+234 810 459 9232</p>
            </div>
        </div>

        <div className='contact-btns'>
            <button type='button' className='cta-btn message'>Message Me</button>
            <button type='button' className='cta-btn resume'>Get My Resume</button>
        </div>

        <hr/>


        </section>
        </>
    );
}

export default Contact;