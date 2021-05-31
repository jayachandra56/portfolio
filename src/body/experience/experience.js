import React from 'react'
import './experience.css'
import restaurantWeb from '../../images/restaurantWeb.png';
import restaurantMobile from '../../images/smartRest.gif';
import venuegif from '../../images/venuebees.gif';
import dilpay from '../../images/dilpay.gif';
function experience(){
    return(
        <div className="container projects" id="projectsID">
            <h1>Projects</h1>
            <div className="contanier shadow joyhoo">
                <h3>VenueBees</h3>
                <p className="projectDesc">Provides rich and relevant travel-related information to users on the move. The idea is to create a smart travel guide app that users can access anytime and from anywhere.
                </p>
                <img className="image" src={venuegif} alt="VenueBees"/>
            </div>
            <div className="contanier shadow kolors">
                <h3>Kolors</h3>
                <p className="projectDesc">The main objective of this Android project is to provide a ​private online consultation that is taken by Health Counselors to analyse and help users to work towards their weight loss goals.​ The idea is to make an app that users can keep track of the complete weight reducing process.This​ saves time and traveling to users waiting for appointments.
                
                </p>
            </div>
            <div className="contanier shadow avani">
                <h3>AvaniGroup RealEstate</h3>
                <p className="projectDesc">Avani is a real estate E-Commerce web application, where users can search for the properties which are available in different locations.
                </p>
            </div>
            <div className="contanier shadow restaurant">
                <h3>Smart Restaurant</h3>
                <p className="projectDesc">The goal of this project is to design and implement an online restaurant
reservation system that would enable diners to order food and also reserve
tables and parking spaces at restaurants to optimize food ordering and table
reservation. This will be managed by the owner to check the booking and make
the availability for the customer. This system is wake to provide service
facilitating both restaurant and also the customer and hence makes it a best
competitive tool.The services provided include food ordering, managing the
reservations of tables and vehicle parking spaces for the customer.
                </p>
                <img className="image" src={restaurantMobile} alt="Smart Restaurant"/>
                <img className="imageWeb" src={restaurantWeb} alt="Smart Restaurant"/>
            </div>
            <div className="contanier shadow dilpay">
                <h3>DilPay</h3>
                <p className="projectDesc">DilPay is a multi-purpose payments app encapsulated by online bus ticket bookings, mobile recharge, DTH Recharge, and also utility bill payment services.
                </p>
                <img className="image" src={dilpay} alt="DilPay"/>
            </div>
        </div>
    )
}
export default experience