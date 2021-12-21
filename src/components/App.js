import React  ,{useState}from "react";
import Profile from "./Profile";
import Menu from "./Menu";
import{FaList,FaTimes} from 'react-icons/fa';
import Texteffect from "./Texteffect";
import About from "./About";
import Skill from "./Skill";
import Eduction from "./Eduction";
import Recentwork from "./Recentwork";
import Contact from "./Contact";

const App=() => {
  const [show, setShow]= useState(false);
  const showsSidebarr = () => setShow(!show);
  return (
    <section>
    <div className="iconlist">
       <div  style={{visibility:show? "hidden":"visible",backgroundColor:'#D3D3D3'}}>
         <div  ><FaList onClick={showsSidebarr} /></div>
         <din className="profilelist1">
         <main className="mainmenu1">
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
           {/* <Texteffect />
           <About />
           <Eduction />
           <Skill/>
           <Recentwork />
           <Contact /> */}
           </din>
       </div>
       <div  style={{visibility:show? "visible":"hidden",marginTop:'-43px',display:'flex'}}>
         <div >< FaTimes className="icon1list"  onClick={showsSidebarr}/></div>
         <br />
        <din className="profilelist">
           <Profile  />
           <Menu />
           </din>
       </div>
    </div>
    <div className="listbig">
      <Profile />
      <Menu />
        {/* <BrowserRouter> 
                 <div className="header" >
                      <Link className="menu_item" to="/">home</Link>
                      <br />
                      <Link className="menu_item" to="/about">about</Link>
                      <br />
                      <Link className="menu_item" to="/skill">skill</Link>
                      <br />
                 <Switch>
                  <Route exact path="/"  ><Texteffect  /></Route>
                  <Route path="/about" ><About/></Route>
                  <Route path="/skill" ><Skill  /></Route>
                </Switch>
                </div>
       </BrowserRouter> */}
    </div>
    </section>
  );
}

export default App;
