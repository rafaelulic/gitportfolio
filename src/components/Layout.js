import React from 'react';
import Sidebar from './Sidebar';
import Splash from './Splash';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import ScrollBtn from './ScrollBtn';
import Footer from './Footer';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isBottom: false };

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll (){

    const height = window.innerHeight + window.scrollY;
    const bottom = document.body.offsetHeight;
    
    if(window.scrollY > 1) {
      this.setState(prevState => ({
        isBottom: true
      }))
    } else {
      this.setState(prevState => ({
        isBottom: false
      }))
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  } 

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  
  render() {
    const isBottom = this.state.isBottom

    return (
      <>
       <Sidebar/>
       <main>
         <Splash /> 
         <About />
         <Portfolio />
         <Resume />
         <Contact />    
         {isBottom ? <ScrollBtn /> : null}    
         
         {/* <Footer /> */}
       </main>
   </>
    )
  }
}

export default Layout;

// function Layout() {
//   return (
//     <>
//         <Sidebar/>
//         <main>
//           <Splash /> 
//           <About />
//           <Portfolio />
//           <Resume />
//           <Contact />          
//           <ScrollBtn />
//           <Footer />
//         </main>
//     </>
//   );
// }

// export default Layout;