import React from 'react'
import './skills.css'
import web from '../../images/web.jpg';
import mobile from '../../images/mobile.jpg';
import backend from '../../images/backend.jpg';
function skills(){
    return(
        <div className="container-fluid p-5 skills" id="skillsID">
            <h1>Skills</h1>
            <div className="container ">
                <div className="row p-1 rounded">
                    <div className="col-md-4 col-sm-12">
                        <h3>Mobile Developer</h3>
                        <div className="flip-card  shadow">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={mobile} className="imageSkill" alt="Mobile Development"/>
                                </div>
                                <div className="flip-card-back">
                                {/* <h2>Mobile Developer</h2> */}
                                <h5>Using Java</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                    <h3>Web Developer</h3>
                        <div className="flip-card shadow">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={web} className="imageSkill" alt="Web Development"/>
                                </div>
                                <div className="flip-card-back">
                                {/* <h2>Web Developer</h2> */}
                                <h5>Using HTML,CSS,Javascript,ReactJS</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                    <h3>Backend Developer</h3>
                        <div className="flip-card shadow">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={backend} className="imageSkill" alt="Backend"/>
                                </div>
                                <div className="flip-card-back">
                                {/* <h2>Backend</h2> */}
                                <h5>Using Php, MySQL</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default skills