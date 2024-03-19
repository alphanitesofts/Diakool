import React from "react";
import aboutImage from '../Image/AboutImg.webp'
import { Link } from "react-router-dom";
import ac from '../Image/acc.png'
import breeze from '../Image/breeze.png'
import wind from '../Image/wind.gif'
import './Styles.css'

function About() {
  return (
    <section className="about_section layout_margin-bottom" >
      <div className="container  ">
        <div className="row">

      

          <div className="col-md-6 mx-auto">
          <img
              src={breeze}
              alt="Breeze"
              className="img-fluid breeze-img"
            />
            <div className="detail-box">
            
              <div className="heading_container">
                <h2 className="text-center">
                  About <span>Us</span>
                </h2>
              </div>
              <p>
                In Diakool our prime objective is to provide you quality product in affordable prices along with advance technology.
                Diakool air conditioner are designed according to <span style={{ textDecoration: "underline" }}>Gulf extreme weather</span> conditions which provides you comfortable levelheaded air in scorching heat and humidity even on the hottest days.
                Diakool product range started with Wall mount, ducted, window and floor standing which are manufactured in high standard of quality and providing you best warranty covers in market.
                The Wi-Fi feature in air conditioners (ACs) can really differentiate the product than conventional (ACs) models that helps you to make your place cool before entering inside. Furthermore you can even save on electricity bills by creating customized power schedules for your AC.
              </p>
              <Link to={`/contact`} style={{ textDecoration: "none" }}>
                Contact Us
              </Link>

             
            </div>
            <img
              src={ac}
              alt="Breeze"
              className="img-fluid ac-img"
            />
             <img
              src={wind}
              alt="Breeze"
              className="img-fluid wind-img"
            />
          </div>
        </div>


      </div>
    </section>
  )
}
export default About