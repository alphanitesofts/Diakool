import React from "react";
import '../ChooseUs/ChooseUs.css'
import Ac from '../../Image/AC.jpg'
import image from '../../Image/sas.jpg'

function ChooseUs() {
  return (
    <div className="container" style={{ marginBottom: "100px", marginTop: "100px" }}>
      <div className="text-center mb-2-8 mb-lg-6">
        <h2 className="display-18 display-md-16 display-lg-14 font-weight-700">Why choose <strong className="text-primary font-weight-700">Us</strong></h2>
        <span>The trusted source for why choose us</span>
      </div>
      <div className="row align-items-center">
        <div className="col-sm-6 col-lg-4 mb-2-9 mb-sm-0">
          <div className="pr-md-3">
            <div className="text-center text-sm-right mb-3">
              <div className="mb-4 rounded-circle mx-auto d-flex justify-content-center align-items-center" style={{ height: "80px", width: "80px", backgroundColor: "#1c3f94" }} >
                <img src="/images/tools.png" alt="..." className=" img-fluid " style={{ height: "40px", filter: "invert(100%)" }} />
              </div>
              <h4 className="sub-info">Easy Installation</h4>
              <p className="display-30 mb-0">Effortlessly install our AC systems and enjoy instant cooling comfort without the complexities for easy installation in any space.
              </p>
            </div>
            <div className="text-center text-sm-right">
              <div className="mb-4 rounded-circle mx-auto d-flex justify-content-center align-items-center" style={{ height: "80px", width: "80px", backgroundColor: "#1c3f94" }} >
                <img src="/images/air-conditioner.png" alt="..." className=" img-fluid " style={{ height: "40px", filter: "invert(100%)" }} />
              </div>
              <h4 className="sub-info">Golden Fin</h4>
              <p className="display-30 mb-0">Designed to resist corrosion and extend the lifespan of your AC unit, delivering reliable comfort year after year.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 d-none d-lg-block">
          <div className="why-choose-center-image">
            <img src={image} style={{ width: '350px', height: '350px' }} alt="..." className="rounded-circle" />
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="pl-md-3">
            <div className="text-center text-sm-left mb-3">
              <div className="mb-4 rounded-circle mx-auto d-flex justify-content-center align-items-center" style={{ height: "80px", width: "80px", backgroundColor: "#1c3f94" }} >
                <img src="/images/cooling.png" alt="..." className=" img-fluid " style={{ height: "60px", filter: "invert(100%)" }} />
              </div>
              <h4 className="sub-info">Turbo Cool</h4>
              <p className="display-30 mb-0">Experience instant relief with Turbo Cool technology, designed to deliver powerful and efficient cooling at your fingertips</p>
            </div>
            <div className="text-center text-sm-left">
              <div className="mb-4 rounded-circle mx-auto d-flex justify-content-center align-items-center" style={{ height: "80px", width: "80px", backgroundColor: "#1c3f94" }} >
                <img src="/images/sales.png" alt="..." className=" img-fluid " style={{ height: "44px", filter: "invert(100%)" }} />
              </div>
              <h4 className="sub-info">Good After Sale services</h4>
              <p className="display-30 mb-0">Experience peace of mind with our exceptional after-sale services, ensuring your AC unit performs at its best long after installation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}
export default ChooseUs