import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faBriefcase,faCog,faImages,faEnvelope,faEdit,faPaperPlane,faFileCode,faFileArchive,faCodeBranch } from '@fortawesome/free-solid-svg-icons'

function Header(){
    return(
        <div className="header">
            <div className="logo">Jaya Chandra Thottempudi</div>
            <div className="menu">
                <ul>
                    <li><a href="#aboutID"><FontAwesomeIcon icon={faUser} size='1x'/>&nbsp;ABOUT ME</a></li>
                    <li><a href="#skillsID"><FontAwesomeIcon icon={faEdit}/>&nbsp;SKILLS</a></li>
                    {/* <li><a ><FontAwesomeIcon icon={faBriefcase}/>&nbsp;EXPERIENCE</a></li> */}
                    <li><a href="#projectsID"><FontAwesomeIcon icon={faCodeBranch}/>&nbsp;PROJECTS</a></li>
                    <li><a href="#reachMe"><FontAwesomeIcon icon={faEnvelope}/>&nbsp;REACH ME</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Header