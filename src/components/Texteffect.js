import React from "react";
import Imagepicture from '../images/Computer-Programmer.jpg';
class Texteffect extends React.Component{
      render(){
        return(
            <section className="texteffect"> 
            <div className="image_1" style={{backgroundImage:`url(${Imagepicture})`}} ></div>
            
            <div className="container-1">
                <h1 >I am </h1>
                <div className="container">
                    <div className="typed-in" >Web Developer</div>
                </div>
            </div>
        </section>
        );
      }
}
export default Texteffect;