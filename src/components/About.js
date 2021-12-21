import React from "react";
import { FaPaintBrush , FaDatabase , FaLaptopCode , FaPython, FaPhp, FaMobileAlt } from 'react-icons/fa';
class About extends React.Component{
     render(){
        return(
            <section className="aboutresponsive">
                <div className="about">
                <h1  > Who Am I?</h1>
                <p>My name is Vida Yousefi and I live in the Miyaneh city of East Azerbaijan province. I was born on 10 November 1996 and my field of study is software engineering and now I am studying at Imam Khomeini International University in Qazvin.</p>
                </div>
                <div style={{marginTop:'40px'}}>
                    <div className="abouticon">
                       <FaPaintBrush style={{color:'blue',height:'30px',width:'30px',paddingTop:'12px',paddingLeft:'3px'}}/>
                       <h1 >Graphic</h1>
                    </div>
                    <div className="abouticon1">
                       <FaDatabase style={{color:'#a84cb8',height:'30px',width:'30px',paddingTop:'12px',paddingLeft:'3px'}}/>
                       <h1 >Software</h1>
                    </div>
                    <div className="abouticon2">
                       <FaLaptopCode style={{color:'#ec410c',height:'30px',width:'30px',paddingTop:'12px',paddingLeft:'3px'}}/>
                       <h1 >Software</h1>
                    </div>
                    <div className="abouticon3">
                       <FaPython style={{color:'#059718',height:'30px',width:'30px',paddingTop:'12px',paddingLeft:'3px'}}/>
                       <h1 >Python</h1>
                    </div>
                    <div className="abouticon4">
                       <FaPhp style={{color:'#a33841',height:'30px',width:'30px',paddingTop:'12px',paddingLeft:'3px'}}/>
                       <h1 >Php</h1>
                    </div>
                    <div className="abouticon5">
                       <FaMobileAlt style={{color:'#9a9c09',height:'30px',width:'30px',paddingTop:'12px',paddingLeft:'3px'}}/>
                       <h1 >Application</h1>
                    </div>
                </div>
            </section>
        );
     }
}
export default About;