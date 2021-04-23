import React from 'react'
import './about.css'
import web from '../../images/about.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
function about(){
    return(
        <div className=" container-fluid about" id="aboutID">
            <div className=" row background">
                <div className="col-md-6 col-sm-12 content">
                    <h1>Hey there,<br/> I'm Jaya Chandra</h1><br/>
                    <p>Having 2+ Years of experience in IT and expertise in developing ​Native Android Applications ​&amp; ​Web Applications​.
                    </p>
                </div>
                <div className="col-md-6 col-sm-12">
                    <img src={web} className="imageAbt" alt="Web Development"/><br/>    
                </div> 
            </div>
        </div>

    )
}
export default about