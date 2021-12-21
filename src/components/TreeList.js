import React ,{useState} from "react";
import NavIcon1 from "./NavIcon1";
import NavIcon2 from "./NavIcon2";
const TreeList =() =>{
  const Datatree =
    {
    title:'BACHELOR DEGREE OF SOFTWARE ENGINEERING',
    description:'I graduated from Shahid Madani University of Tabriz in the field of software engineering '
    }
    const Treedata=
    {
      title:'MASTER DEGREE OF SOFTWARE ENGINEERING',
      description:'I am currently studying software engineering at Imam Khomeini International University in Qazvin'
    }
  return(
    <section style={{marginLeft:'200px'}}>
      <NavIcon1 datatree={Datatree} />
      <NavIcon2 treedata={Treedata} />
    </section>
  )
}

// class TreeList extends React.Component{
//   state = {
//     isHidden: true
//   }
//  toggleHidden = ()=>this.setState((prevState)=>({isHidden: !prevState.isHidden}))

//  render(){
//   return(
//      <div className="skill">
//      <span onClick={this.toggleHidden}>
//      <p> hello</p></span>
//            {!this.state.isHidden && <p>yes</p>}   
//      </div>
//   )
//  }
// }
  
export default TreeList;