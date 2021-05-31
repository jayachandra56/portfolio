import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './reachme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faEnvelope,faPhoneAlt,faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Snackbar, SnackbarContent } from '@material-ui/core'


const Reach=()=>{
    const [mail,setMail] = useState("");
    const [subject,setSubject] = useState('');
    const [message,setMessage] = useState('');
    const [opensnack, setopensnack] = useState(false)
    function ContactSubmit(event){
        event.preventDefault();
        let data=new FormData();
        data.append('mail',mail);
        data.append('subject',subject);
        data.append('message',message)
        fetch('http://chandra.getenjoyment.net/portfolio/reachMe.php',{
            method: 'POSt',
            body:data
        }).then(()=>{
            console.log("done....")
            setMessage('')
            setSubject('')
            setMail('')
            setopensnack(true)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const handleCloseSnack=()=>{
        setopensnack(false)
    }
    return(
        <>
        <div className="container-fluid p-5" id="reachMe">
            <div className="container my-5" >
                <div className="row">
                    <div className="col-md-6 text-left">
                        <div className="details">
                        <strong><FontAwesomeIcon icon={faUser} size='1x'/>&nbsp;&nbsp;JayaChandra Thottempudi</strong><br/><br/>
                            <FontAwesomeIcon icon={faEnvelope} size='1x'/>&nbsp; thottempudi56@gmail.com<br/><br/>
                            <p>
                            <FontAwesomeIcon icon={faMapMarkedAlt} size='1x'/>&nbsp;&nbsp;Nizampet,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hyderabad, 500090</p><br/>
                        </div>   
                    </div>
                    <div className="col-md-6">
                        <div className="form">
                            <form onSubmit={ContactSubmit}>
                            <label class="label" for="email">Email address::</label>
                                <div class="form-group">
                                
                                <input type="email" value={mail} class="form-control" onChange={(e) => setMail(e.target.value)} placeholder="Email" id="email" name="email"/>
                                </div>
                                <div class="form-group">
                                <label for="pwd">Subject:</label>
                                <input type="text" value={subject} class="form-control" onChange={(e) => setSubject(e.target.value)} placeholder="Subject" id="subject" name="subject"/>
                                </div>
                                <div class="form-group">
                                <label for="msg">Meassage:</label>
                                <textarea type="text" value={message} class="form-control" onChange={(e) => setMessage(e.target.value)} rows="6" placeholder="Type a message..." id="pwd"></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary" >Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Snackbar
                
                open={opensnack}
                onClose={handleCloseSnack}
                key={'bottom'+'center'}
                >
                    <SnackbarContent style={{
                        backgroundColor:'green',  
                        }}
                        message={<span id="client-snackbar">Thank you. I'll get back to you!!</span>}
                    />
                </Snackbar>
        </>
    )
}
export default Reach