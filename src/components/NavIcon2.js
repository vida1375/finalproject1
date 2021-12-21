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
left: ${({sidebar})=>(sidebar ?'8px':'-100%')};
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
    <Nav style={{marginLeft:'151px',marginTop:'100px'}}>
    <div className="eductiondiv1">
      <p className="eductionp2">{props.treedata.title}</p>
      <NavIcon to='#' style={{marginTop:'-59px',marginLeft:'499px',color:"white"}}>
        <FaPlus style={{visibility:sidebar? "hidden":"visible"}} onClick={showSidebar} />
      </NavIcon>
      </div>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap className="nav2" style={{visibility:sidebar? "visible":"hidden"}}>
        <NavIcon to='#' style={{marginTop:'-5px',marginLeft:'-200px',color:"white"}} >
          <FaMinus  onClick={showSidebar} />
       </NavIcon>
       <p className="eductionp4">{props.treedata.description}</p>
        </SidebarWrap>
      </SidebarNav>
      </Nav>
    </section>
  )
}
  
export default NavIcon1;