import React from "react";
import Progressbar from "./Progressbar";
class Skill extends React.Component{
    render(){
        return(
            <section className="skillresponsive">
           <div className="skill">
            <h1>MY SKILLS</h1>
             <div className="skillprogress">
             <section  >
                   <p className="skillprogressicon1">Html</p>
                    <Progressbar bgcolor="orange" progress='90'  height={30} />
                    <p className="skillprogressicon1">Css</p>
                    <Progressbar bgcolor="red" progress='85'  height={30} />
                    <p className="skillprogressicon1">Bootstrap</p>
                    <Progressbar bgcolor="#99ff66" progress='60'  height={30} />
                    <p className="skillprogressicon1">Laravel</p>
                    <Progressbar bgcolor="#ec410c" progress='30'  height={30} />
              </section>
              <section style={{marginLeft:'433px',marginTop:'-444px'}}>
                    <p className="skillprogressicon1">React</p>
                    <Progressbar bgcolor="#ff00ff" progress='70'  height={30} />
                    <p className="skillprogressicon1">Javascript</p>
                    <Progressbar bgcolor="#99ccff" progress='75'  height={30} />
                    <p className="skillprogressicon1">Python</p>
                    <Progressbar bgcolor="#9a9c09" progress='45'  height={30} />
                    <p className="skillprogressicon1">Nodejs</p>
                    <Progressbar bgcolor="#f59608" progress='35'  height={30} />
            </section>
            </div>
            </div>
            </section>
        );
    }
}
export default Skill;