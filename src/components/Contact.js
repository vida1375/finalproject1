import React from "react";
import { BiMailSend  } from "react-icons/bi";
import { FaTelegramPlane ,FaPhone } from 'react-icons/fa';
class Contact extends React.Component{
     handleSubmit= (e) =>{
        e.preventDefault();
      }
      handleClick = () => {
        alert('Your message has been successfully sent.');
      }
    render(){
        return(
            <section className="contactresponsive">
            <div className="contact" >
                <h1>CONTACT </h1>
                <section>
                    <div>
                        <div className="contactdiv1">
                            <BiMailSend style={{color:"#2c98f0" ,width:'45px',height:'45px',paddingTop:'20px',paddingLeft:'20px'}}/>
                        </div>
                        <p className="contactp1" >www.vidayousefi1375@gmail.com</p>
                        <div className="contactdiv2">
                            <FaTelegramPlane style={{color:"#2c98f0",width:'45px',height:'45px',paddingTop:'20px',paddingLeft:'20px'}}/>
                        </div>
                        <p className="contactp2">Yousefi_vida</p>
                        <div className="contactdiv3">
                            <FaPhone style={{color:"#2c98f0",width:'45px',height:'45px',paddingTop:'20px',paddingLeft:'20px'}} />
                        </div>
                    <p className="contactp3">09036931786</p>
                   </div>
                </section>
                <section>
                    <form className="contactinput" onSubmit={this.handleSubmit}>
                            <input type='text' placeholder='Name' className="contactinput1" />
                            <br />
                            <input type='email' placeholder='Email' className="contactinput2"/> 
                            <br />
                            <input type='text' placeholder='Subject'className="contactinput3" />
                            <br />
                            <textarea name id='message' placeholder='Message'className="contactinput4"/>
                            <button type="submit" className="submit" onClick={this.handleClick}> SEND MESSAGE</button>
                    </form>
                </section>
            </div>
            </section>
        )
    }
}
export default Contact;