import React from 'react';


var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;
 
function scrollTo (){
    scroll.scrollMore(800);
    
};


function ScrollBtn() {
    return (
        // <a href="#" class="scroll-down" address="true"></a>

        <section id="scroll-btn"> 
            {/* <Link to="500" spy={true} smooth={true} duration={1500} ><span></span></Link> */}
            <span onClick={scrollTo}><span></span></span>
        </section>
    );
}

export default ScrollBtn;  