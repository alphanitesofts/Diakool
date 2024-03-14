import React from "react";

function Department(){
    return(
        <section className="department_section layout_padding">
        <div className="department_container">
          <div className="container ">
            <div className="heading_container heading_center">
              <h2>
                Hot Categories
              </h2>
              <p>
              Explore our latest and popular air conditioning categories, offering superior comfort and performance.
              </p>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/airconditioner.png" alt />
                  </div>
                  <div className="detail-box">
                    <h5>
                      Split A.C
                    </h5>
                    <p>
                    Choose our Split Air Conditioners for efficient cooling and energy savings. Perfect for individual rooms.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/windowac.png" alt />
                  </div>
                  <div className="detail-box">
                    <h5>
                      Window A.C
                    </h5>
                    <p>
                    Discover the convenience of our Window Air Conditioners. Easy to install and ideal for smaller spaces.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/portableac.png" alt />
                  </div>
                  <div className="detail-box">
                    <h5>
                      Portable A.C
                    </h5>
                    <p>
                    Enjoy portability with our Portable Air Conditioners. Move them wherever you need a cool breeze.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/aircurtain.png" alt />
                  </div>
                  <div className="detail-box">
                    <h5>
                      Duct A.C
                    </h5>
                    <p>
                    Opt for Ducted Air Conditioners for a centralized cooling solution. Perfect for larger spaces and offices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-box">
              <a href="productlisting">
                View All
              </a>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Department