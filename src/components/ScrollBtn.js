import React from 'react'
import { Link } from 'react-scroll'
import { Fade } from 'react-reveal'

function ScrollBtn() {
    return (
        // <a href="#" class="scroll-down" address="true"></a>
        // <Fade>
            <Link to="splash" spy={true} smooth={true} duration={1500} >
                <section id="scroll-btn">                 
                <Fade>
                    <span><span></span></span>
                </Fade>
                </section>
            </Link>
        // </Fade>
    )
}

export default ScrollBtn;  