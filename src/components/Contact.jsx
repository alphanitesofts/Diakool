import React from "react";

function Contact() {
  return (
    <section className="contact_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>
            Get In Touch
          </h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form_container contact-form">
              <form action='https://getform.io/f/f902911d-04fd-4ced-ae63-901d3fc5bf31' method='POST'>
                <div className="form-row">
                  <div className="col-lg-6">
                    <div>
                      <input type="text" name="name" placeholder="Your Name" required/>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div>
                      <input type="text" name="phone_number" placeholder="Phone Number" required />
                    </div>
                  </div>
                </div>
                <div>
                  <input type="email" name="email" value='email' placeholder="Email" required/>
                </div>
                <div>
                  <input type="text" name="message" className="message-box" placeholder="Message" required/>
                </div>
                <div className="btn_box">
                  <button type="submit">
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="map_container">
              <div className="map">
                {/* <div id="googleMap" /> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3611.834235359949!2d55.239402775380036!3d25.141294477747028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDA4JzI4LjciTiA1NcKwMTQnMzEuMSJF!5e0!3m2!1sen!2s!4v1703852687526!5m2!1sen!2s" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact