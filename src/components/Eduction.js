import React from "react";
import { Routes, Route, Link, BrowserRouter  } from 'react-router-dom';
import TreeList from './TreeList';
import { FaUserGraduate } from 'react-icons/fa';
class Esuction extends React.Component{
    render(){
    return (
      <section className="educationresponsive">
        <div> 
          <h1 className="educationh" > EDUCATION</h1>
          <FaUserGraduate style={{paddingLeft:'435px' , paddingTop:'50px',height:'80px',width:'80px'}} />
        </div>
        <BrowserRouter>
          <Route>
          <TreeList  />
          </Route>
        </BrowserRouter>
      </section>
    );
    }
  }
export default Esuction;