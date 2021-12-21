import React from "react";
import Iconpicture1 from '../images/images111.jfif';
import Iconpicture2 from '../images/images.jfif';
import Iconpicture3 from '../images/images (1).jfif';
class Webdesign extends React.Component{
    render(){
        return(
            <div>
                <div className="webimg1"><img src={Iconpicture1}/></div>
                <div className="webimg2"><img src={Iconpicture2}/></div>
                <div className="webimg3"><img src={Iconpicture3}/></div>
            </div>
        );
    }
}
export default Webdesign;