import React ,{useEffect , useState}from "react";
import { BiHome } from "react-icons/bi";
import { FaUser , FaGraduationCap ,FaLayerGroup} from 'react-icons/fa';
import { HiLightBulb } from "react-icons/hi";
import { TiContacts } from "react-icons/ti";
// import { Routes, Route, Link, BrowserRouter  } from 'react-router-dom';
import About from "./About";
import Texteffect from "./Texteffect";
import Skill from "./Skill";
import Eduction from "./Eduction";
import Contact from "./Contact";
import Recentwork from "./Recentwork";
const Menu =()=> {
      const [scrolled,setScrolled]=useState(false);
      useEffect(()=>{
        let mainNavLinks = document.querySelectorAll("nav ul li a");
        let mainSections = document.querySelectorAll("main section");
        
        let lastId;
        let cur = [];
        window.addEventListener("scroll", event => {
          let fromTop = window.scrollY;
        
          mainNavLinks.forEach(link => {
            let section = document.querySelector(link.hash);
        
            if (
              section.offsetTop <= fromTop &&
              section.offsetTop + section.offsetHeight > fromTop
            ) {
              link.classList.add("current");
            } else {
              link.classList.remove("current");
            }
          });
        });
      })
      let navbarClasses=['navbar'];
     if(scrolled){
       navbarClasses.push('scrolled');
  }
      return (
      <section className={navbarClasses.join(" ")}>
        <nav className="navsection">
        <ul>
        <li><a href="#home"><BiHome  style={{color:'black',paddingRight:'10px',width:'30px',height:'30px'}}/>Home</a></li>
          <li><a href="#about"><FaUser style={{color:'black',paddingRight:'10px',width:'30px',height:'30px'}}/>About</a></li>
          <li><a href="#eduction"><FaGraduationCap style={{color:'black',paddingRight:'10px',width:'30px',height:'30px'}}/>Eduction</a></li>
          <li><a href="#skill"><HiLightBulb style={{color:'black',paddingRight:'10px',width:'30px',height:'30px'}}/>Skill</a></li>
          <li><a href="#work"><FaLayerGroup style={{color:'black',paddingRight:'10px',width:'30px',height:'30px'}}/>Recent Work</a></li>
          <li><a href="#contact"><TiContacts style={{color:'black',paddingRight:'10px',width:'30px',height:'30px'}}/>Contact</a></li>
        </ul>
      </nav>
      <main className="mainmenu">
      <section id="home">
        <Texteffect />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="eduction">
        <Eduction />
      </section>
      <section id="skill">
        <Skill />
      </section>
      <section id="work">
        <Recentwork />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
    </section>
     );
  }
export default Menu;
 {/* <Routes>
            <Route  path="/" exact Component={Texteffect}/>
            <Route path="/about" Component={About}/>
            <Route path="/skill" Component={Skill}/>
          </Routes> */}