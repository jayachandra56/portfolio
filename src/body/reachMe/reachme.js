import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './reachme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faEnvelope,faPhoneAlt,faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons'
function reach(){
    return(
        <div className="container-fluid p-5" id="reachMe">
            <div className="container my-5" >
                <div className="row">
                    <div className="col-md-6 text-left">
                        <div className="details">
                        <strong><FontAwesomeIcon icon={faUser} size='1x'/>&nbsp;&nbsp;JayaChandra Thottempudi</strong><br/><br/>
                            <FontAwesomeIcon icon={faEnvelope} size='1x'/>&nbsp; thottempudi56@gmail.com<br/><br/>
                            <p><FontAwesomeIcon icon={faPhoneAlt} size='1x'/>&nbsp; 9121382727<br/><br/>
                            <FontAwesomeIcon icon={faMapMarkedAlt} size='1x'/>&nbsp;&nbsp;Nizampet,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hyderabad, 500090</p><br/>
                        </div>   
                    </div>
                    <div className="col-md-6">
                        <div className="form">
                            <form action="http://chandra.getenjoyment.net/sports/test.php?" method="GET">
                            <label class="label" for="email">Email address:</label>
                                <div class="form-group">
                                
                                <input type="email" class="form-control" placeholder="Email" id="email" name="email"/>
                                </div>
                                <div class="form-group">
                                <label for="pwd">Subject:</label>
                                <input type="text" class="form-control" placeholder="Subject" id="subject" name="subject"/>
                                </div>
                                <div class="form-group">
                                <label for="msg">Meassage:</label>
                                <textarea type="text" class="form-control" rows="6" placeholder="Type a message..." id="pwd"></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default reach