import React from "react";
import '../OurRecord/OurRecord.css'
import since from '../../Image/since.jpg'
function OurRecord() {
  return (
    <section className="section about-section gray-bg" id="about">
      <div className="container">
        <div className="row align-items-center flex-row-reverse">
          <div className="col-lg-6">
            <div className="about-text go-to">
              <h3 className="dark-color">Ducted Series Enabled Wi-Fi </h3>
              <h6 className="theme-color lead">What Are Wi-Fi Enabled Air Conditioners (ACs)?</h6>
              <p> <mark>We all know </mark>, how harsh the summers can be in the UAE. 
              The searing heat and humidity can make conditions even worse! While an air conditioner can be useful,
               returning home, turning it on, and waiting for it to chill your room can be inconvenient.
                Did you know that you can use a Wi-Fi-enabled air conditioner to return home to a cool the surroundings?</p>
                <br />
                The Wi-Fi feature in air conditioners (ACs) has the potential to significantly change way we use them.
                 You can switch on your air conditioner even before you get home.
                  If it fails to impress you, did you know you can save money on your electricity bill by setting up unique power 
                  schedules for your air conditioner?
                 Wi-Fi-enabled ACs are far more adaptable than typical ACs.
                
              {/* <div className="row about-list">
                <div className="col-md-8">
                  {/* <div className="media">
                <label>Birthday</label>
                <p>4th april 1998</p>
              </div> 
                  {/* <div className="media">
                <label>Age</label>
                <p>22 Yr</p>
              </div> 
                  {/* <div className="media">
                <label>Residence</label>
                <p>Canada</p>
              </div> 
                  <div className="media">
                    <label>Address:  {" "}</label>
                    <p>{" "}Amman Street - INDUSTRIAL AREA 2 - Ajman - United Arab Emirates</p>
                  </div>
                  <div className="media">
                    <label>E-mail </label>
                    <p>Diakoolairconditioners@gmail.com</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="media">
                    <label>Phone</label>
                    <p>+971505735436</p>
                  </div>
                  {/* <div className="media">
                <label>Skype</label>
                <p>skype.0404</p>
              </div> 
                  {/* <div className="media">
                <label>Freelance</label>
                <p>Available</p>
              </div> 
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-avatar">
              <img src='/images/wifipic.jpg' title alt />
            </div>
          </div>
        </div>
        <div className="counter">
          <div className="row">
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" style={{ color: "white" }} data-to={500} data-speed={500}>500</h6>
                <p className="m-0px font-w-600" style={{ color: "white" }}>Happy Clients</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" style={{ color: "white" }} data-to={150} data-speed={150}>150</h6>
                <p className="m-0px font-w-600" style={{ color: "white" }}>A.C Installed</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" style={{ color: "white" }} data-to={850} data-speed={850}>850</h6>
                <p className="m-0px font-w-600" style={{ color: "white" }}>Locations</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" style={{ color: "white" }} data-to={190} data-speed={190}>190</h6>
                <p className="m-0px font-w-600" style={{ color: "white" }}>Telephonic Talk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
export default OurRecord