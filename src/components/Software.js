import React from "react";
import Iconpicture4 from '../images/images (2).jfif';
import Iconpicture5 from '../images/imagesss.jfif';
import Iconpicture6 from '../images/download.jfif';
class Sotware extends React.Component{
    render(){
        return(
            <div>
                <div className="softwareimg1"><img src={Iconpicture4}/></div>
                <div className="softwareimg2"><img src={Iconpicture5}/></div>
                <div className="softwareimg3"><img src={Iconpicture6}/></div>
            </div>
        );
    }
}
export default Sotware;