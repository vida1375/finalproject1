import React from "react";
import Icon from '../images/imagess1.jpg';
import { SocialIcon } from 'react-social-icons';
import {FaTelegram , FaGithub} from 'react-icons/fa';
import{BsWhatsapp , BsInstagram , BsTwitter} from "react-icons/bs";
import Menu from "./Menu";
const Profile = () =>{
    return(
        <div className="profile">
        <img src={Icon} />
        <div className="icon">
            <div className="icondiv1">
            < FaTelegram className="icon1"/>
            </div>
            <div className="icondiv2">
            <BsWhatsapp className="icon2"/>
            </div>
            <div className="icondiv3">
            <BsInstagram className="icon3"/>
            </div>
            <div className="icondiv4">
            <BsTwitter className="icon4"/>
            </div>
            <div className="icondiv5">
            <FaGithub className="icon5"/>
            </div>
           {/* <span><SocialIcon network="twitter" style={{backgroundColor:"white" ,borderRadius:'30px'}}/></span>
           <span><SocialIcon network="instagram" style={{backgroundColor:"white" ,borderRadius:'30px'}}/></span>
           <span><SocialIcon network="telegram"style={{backgroundColor:"white" ,borderRadius:'30px'}} /></span>
           <span><SocialIcon network="github" style={{backgroundColor:"white" ,borderRadius:'30px'}}/></span>
           <span><SocialIcon network="whatsapp" style={{backgroundColor:"white" ,borderRadius:'30px'}}/></span> */}
        
          <div>
              <h1>Vida Yousefi</h1>
          </div>
        </div>
        </div>
    );
}
export default Profile;