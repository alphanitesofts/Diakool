import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer_section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 footer_col">
            <div className="footer_contact">
              <h4>
                Reach at..
              </h4>
              <div className="contact_link_box">
                <a href="https://www.google.com/maps/place/COOL+ZONE+AC+SPARE+PARTS+%26+EQUIPMENT+TRADING/@25.3813727,55.4668604,15z/data=!4m6!3m5!1s0x3e5f596231039b6f:0x38dfb1937ba216bb!8m2!3d25.3813727!4d55.4668604!16s%2Fg%2F11v06j9tb3?entry=ttu"
                  target="_blank">
                  <i className="fa fa-map-marker" aria-hidden="true" />
                  <span>
                    AL BAHRI WAREHOUSE # 16 <br />
                    AL ASAYEL STREET <br />
                    AL QUOZ IND 2 – DUBAI – UAE
                  </span>
                </a>
                <a href="tel:+971505735436">
                  <i className="fa fa-phone" aria-hidden="true" />
                  <span>
                    Call +971505735436
                  </span>
                </a>
                <a href="mailto:Diakoolairconditioners@gmail.com">
                  <i className="fa fa-envelope" aria-hidden="true" />
                  <span>
                    Diakoolairconditioners@gmail.com
                  </span>
                </a>
              </div>
            </div>
            <div className="footer_social">
              <a href="https://www.facebook.com/profile.php?id=61554996632615&mibextid=9R9pXO" target="_blank">
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/diakool_airconditioners/" target="_blank">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/in/diakool-air-conditioners-b206072a2/" target="_blank">
                <i className="fa fa-linkedin" aria-hidden="true" />
              </a>
              <a href="https://www.youtube.com/channel/UCpyCCBRs_mJgmPZThPY-MMA" target="_blank">
                <i className="fa fa-youtube" aria-hidden="true" style={{ color: "white" }} />
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 footer_col">
            <div className="footer_detail">
              <h4>
                About
              </h4>
              <p>
                In Diakool our prime objective is to provide you quality product in affordable prices along with advance technology.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-2 mx-auto footer_col">
            <div className="footer_link_box">
              <h4>
                Links
              </h4>
              <div className="footer_links">
                <Link className="active" to="/">
                  Home
                </Link>
                <Link className to="/about">
                  About
                </Link>
                <Link className to="/productlisting">
                  All Products
                </Link>
                <Link className to="/contact">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 footer_col ">
            <h4>
              Newsletter
            </h4>
            <form action="#">
              <input type="email" placeholder="Enter email" />
              <button type="submit" className="text-light">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="footer-info">
          <p className="pt-2 pb-1">
            © <span id="displayYear"/>2022 Copyright All Rights Reserved By&nbsp;
            <a href="https://diakool.com/">DiaKool</a>
          </p>
          <p className="p-0">
            <span id="displayYear" /> Developed by<a href="https://alphanitesofts.com/">&nbsp;Alphanites Soft</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer