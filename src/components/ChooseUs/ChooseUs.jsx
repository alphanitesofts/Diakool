import React from "react";
import '../ChooseUs/ChooseUs.css'
import Ac from '../../Image/AC.jpg'
function ChooseUs(){
    return(
    <div className="container">
  <div className="text-center mb-2-8 mb-lg-6">
    <h2 className="display-18 display-md-16 display-lg-14 font-weight-700">Why choose <strong className="text-primary font-weight-700">Us</strong></h2>
    <span>The trusted source for why choose us</span>
  </div>
  <div className="row align-items-center">
    <div className="col-sm-6 col-lg-4 mb-2-9 mb-sm-0">
      <div className="pr-md-3">
        <div className="text-center text-sm-right mb-2-9">
          <div className="mb-4">
            <img src="/images/house-cleaning.png" alt="..." className="rounded-circle" />
          </div>
          <h4 className="sub-info">Residential Cleaning</h4>
          <p className="display-30 mb-0">Keep your home clean and fresh with our professional
           residential cleaning services. 
           We ensure every nook and corner is sparkling.
           </p>
        </div>
        <div className="text-center text-sm-right">
          <div className="mb-4">
            <img src="/images/vacuum-cleaner.png" alt="..." className="rounded-circle" />
          </div>
          <h4 className="sub-info">Commercial Cleaning</h4>
          <p className="display-30 mb-0"> We provide top-notch commercial cleaning services tailored to your business needs.
           Create a pristine work environment with us.</p>
        </div>
      </div>
    </div>
    <div className="col-lg-4 d-none d-lg-block">
      <div className="why-choose-center-image">
      <img src={Ac} style={{width: '350px', height: '350px'}} alt="..." className="rounded-circle" />
      </div>
    </div>
    <div className="col-sm-6 col-lg-4">
      <div className="pl-md-3">
        <div className="text-center text-sm-left mb-2-9">
          <div className="mb-4">
            <img src="/images/washing-machine.png" alt="..." className="rounded-circle" />
          </div>
          <h4 className="sub-info">Washing services</h4>
          <p className="display-30 mb-0">Experience the convenience of our washing services.
           We take care of your laundry needs, providing freshness with every wash.</p>
        </div>
        <div className="text-center text-sm-left">
          <div className="mb-4">
            <img src="/images/carpet-cleaner.png" alt="..." className="rounded-circle" />
          </div>
          <h4 className="sub-info">Carpet cleaning</h4>
          <p className="display-30 mb-0">Revitalize your carpets with our expert cleaning services.
           We remove stains and allergens, leaving your carpets looking brand new..</p>
        </div>
      </div>
    </div>
  </div>
</div>


    )
}
export default ChooseUs