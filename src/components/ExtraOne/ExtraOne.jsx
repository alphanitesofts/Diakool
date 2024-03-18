import React from "react";
import '../ExtraOne/ExtraOne.css'
function ExtraOne() {
  return (
    <div className="container" style={{ marginTop: 50, marginBottom: "100px" }}>
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-6">
              <div className="row">
                <div className="col-lg-12 col-md-12 mt-4 pt-2">
                  <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                    <div style={{
                      width: "255px", height: "362px",
                      backgroundImage: "url('/images/source.jpg')",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat"
                    }}>
                      {/* <img src="/images/source.jpg"   className="img-fluid " alt="Image" style={{objectFit:"cover"}} /> */}
                    </div>
                    <div className="img-overlay bg-dark" />
                  </div>
                </div>

              </div>
              {/*end row*/}
            </div>
            {/*end col*/}
            <div className="col-lg-6 col-md-6 col-6">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                    <div style={{
                      width: "337px", height: "450px",
                      backgroundImage: "url('/images/DA_.webp')",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat"
                    }}>
                      {/* <img src="/images/DA_.webp" className="img-fluid" alt="Image" /> */}
                    </div>
                    <div className="img-overlay bg-dark" />
                  </div>
                </div>
                {/*end col*/}
                <div className="col-lg-12 col-md-12 mt-4 pt-2">
                  <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                    <img src="/images/download.jpg" className="img-fluid" alt="Image" />
                    <div className="img-overlay bg-dark" />
                  </div>
                </div>
                {/*end col*/}
              </div>
              {/*end row*/}
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end col*/}
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
                  <img src="https://supercoolacimages.alphanitesofts.net/1703776075.png" style={{ height: "40px" }} className="mb-0 text-custom" />
                  <h6 className="mb-0 sub-info"><a className="text-dark" style={{color:"#000"}}>Technical Support</a></h6>
                </div>
              </div>
              <div className="col-lg-6 mt-4 pt-2">
                <div className="align-items-center rounded shadow p-3" style={{ backgroundColor: "#cbc3f7" }}>
                  <img src="https://supercoolacimages.alphanitesofts.net/1703776195.jpg" style={{ height: "40px" }} className="mb-0 text-custom" />
                  <h6 className="mb-0 sub-info"><a className="text-dark" style={{color:"#000"}}>Consultancy & Design</a></h6>
                </div>
              </div>
              <div className="col-lg-6 mt-4 pt-2">
                <div className=" align-items-center rounded shadow p-3" style={{ backgroundColor: "#1982ba" }}>
                  <img src="	https://supercoolacimages.alphanitesofts.net/1703776662.png" style={{ height: "40px" }} className="mb-0 text-custom" />
                  <h6 className="mb-0 sub-info"><a className="text-dark" style={{color:"#000"}}>Professional Installation</a></h6>
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