import React from "react";
import Iconpicture7 from '../images/download158.jfif';
import Iconpicture8 from '../images/images1234 (1).jfif';
import Iconpicture9 from '../images/images123 (2).jfif';
class Graphicdesign extends React.Component{
    render(){
        return(
            <div>
                <div className="Graphicdesignimg1"><img src={Iconpicture7}/></div>
                <div className="Graphicdesignimg2"><img src={Iconpicture8}/></div>
                <div className="Graphicdesignimg3"><img src={Iconpicture9}/></div>
            </div>
        );
    }
}
export default Graphicdesign;