import React from "react";
import '../ExtraOne/ExtraOne.css'
import goldfins from '../../Image/Gold Fins.jpg'
import specs from '../../Image/Wall Type Spec.jpg'
import banner from '../../Image/banner.png'

function ExtraOne() {
  return (
    <div className="container" style={{ marginTop: 50, marginBottom: "100px" }}>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <img src={specs} alt="" className="img-fluid mb-2" style={{ height: "200px", borderRadius:"10px" }} />
          <img src={goldfins} alt="" className="img-fluid mt-2" style={{ height: "200px", borderRadius:"10px" }} />
        </div>

        <div className="col-lg-6 col-md-6 col-12 order-1 order-md-2">
          <div className="section-title ml-lg-5">
            <h5 className="sub-info" style={{ fontSize: 35, fontWeight: 600, color: '#1c3f94' }}>Our Mission</h5>
            <h4 className="title mb-4 sub-info" style={{ fontSize: 20, fontWeight: 300 }}>
              Our mission is to <br />
              make your life easier.
            </h4>
            <p className="sub-info mb-0" style={{ fontWeight: 100, lineHeight: "35px" }}>We envision a world where technology enhances lives, simplifies tasks, and fosters creativity.</p>
            <div className="row">
              <div className="col-lg-6 mt-4 pt-2">
                <div className="align-items-center rounded shadow p-3" style={{ backgroundColor: "#eddaff" }}>
                  <i className="fa fa-solid fa-quote-right" />
                  <h6 className="mb-0 sub-info"><a className="text-dark" style={{ color: "#000" }}>Technical Support</a></h6>
                </div>
              </div>
              <div className="col-lg-6 mt-4 pt-2">
                <div className="align-items-center rounded shadow p-3" style={{ backgroundColor: "#cbc3f7" }}>
                  <i className="fa fa-solid fa-paper-plane" />
                  <h6 className="mb-0 sub-info"><a className="text-dark" style={{ color: "#000" }}>Consultancy & Design</a></h6>
                </div>
              </div>
              <div className="col-lg-6 mt-4 pt-2">
                <div className=" align-items-center rounded shadow p-3" style={{ backgroundColor: "#1982ba" }}>
                  <img className="fa fa-solid fa-gears" />
                  <h6 className="mb-0 sub-info"><a className="text-dark" style={{ color: "#000" }}>Professional Installation</a></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*end col*/}
      </div>
      {/*enr row*/}
    </div>


  )
}
export default ExtraOne