import React ,{useState} from "react";
import styled from "styled-components";
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { Link } from "react-router-dom";
const Nav = styled.div`
height:80px;
display:flex;
justify-content:flex-start;
align-items:center;
`;
const NavIcon = styled(Link)`
display:flex;
height:80px;
justify-content:center;
align-items:center;


`;
const SidebarNav = styled.nav`
// width:250px;
height:80px;
display:flex;
justify-content:center;
left: ${({sidebar})=>(sidebar ?'5px':'-100%')};
z-index:10;
`;
const SidebarWrap = styled.div`
width:100%;
`;
const NavIcon1 =(props)=>{
  const [sidebar,setSidebar]= useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return(
    <section>
    <Nav style={{marginLeft:'150px',marginTop:'100px'}}>
        <div className="eductiondiv">
      <p className="eductionp1">{props.datatree.title}</p>
      <NavIcon to='#' style={{marginTop:'-56px',marginLeft:'499px',color:"white"}}>
        <FaPlus style={{visibility:sidebar? "hidden":"visible"}} onClick={showSidebar} />
      </NavIcon>
      </div>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap className="nav1" style={{visibility:sidebar? "visible":"hidden"}}>
        <NavIcon to='#' style={{marginTop:'-124px',marginLeft:'-205px',color:"white"}} >
          <FaMinus  onClick={showSidebar} />
       </NavIcon>
       <p className="eductionp3">{props.datatree.description}</p>
        </SidebarWrap>
      </SidebarNav>
      </Nav>
    </section>
  )
}
  
export default NavIcon1;