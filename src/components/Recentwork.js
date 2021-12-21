import React from "react";
import Webdesign from "./Webdesign";
import {BrowserRouter,Route ,Link} from "react-router-dom";
import Sotware from "./Software";
import Graphicdesign from "./Graphicdesign";
import { Switch } from "react-router";
class Recentwork extends React.Component{
    render(){
        return(
            <section className="recentresponsive">
            <div className="workh">
            <h1  >Recent Work</h1>
            <div className="workdiv">
             <BrowserRouter >
             <div className="headerr">
                 <Link className="menu_item3" to="/" style={{color:"#2c98f0"}}>Web Design</Link>
                 <br />
                 <Link className="menu_item3" to="/software">software</Link>
                 <br />
                 <Link className="menu_item3" to="/graphicdesign">Graphicdesign</Link>
             </div>
             <Switch>
             <Route exact path="/"  component={Webdesign}><Webdesign /></Route>
             <Route path="/software" ><Sotware/></Route>
             <Route path="/graphicdesign" ><Graphicdesign /></Route>
             </Switch>
           </BrowserRouter> 
        </div>
        </div>
        </section>

        )
    }
}
export default Recentwork;