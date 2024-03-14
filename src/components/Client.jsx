import React from "react";

function Client(){
    return(
        <section className="client_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container heading_center ">
            <h2>
              Testimonial
            </h2>
          </div>
          <div id="carouselExample2Controls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-11 col-lg-10 mx-auto">
                    <div className="box">
                      <div className="img-box">
                        <img src="images/client.jpg" alt />
                      </div>
                      <div className="detail-box">
                        <div className="name">
                          <h6>
                          Sarah Thompson
                          </h6>
                        </div>
                        <p>
                        Diakool Air Conditioners provided exceptional service. Their team is highly professional, and the quality of their work exceeded my expectations. I highly recommend their services.
                        </p>
                        <i className="fa fa-quote-left" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-11 col-lg-10 mx-auto">
                    <div className="box">
                      <div className="img-box">
                        <img src="images/client.jpg" alt />
                      </div>
                      <div className="detail-box">
                        <div className="name">
                          <h6>
                          John Davis
                          </h6>
                        </div>
                        <p>
                        The team at Diakool is fantastic! They were prompt, efficient, and solved our air conditioning issues with expertise. I'm impressed with their commitment to customer satisfaction.
                        </p>
                        <i className="fa fa-quote-left" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-11 col-lg-10 mx-auto">
                    <div className="box">
                      <div className="img-box">
                        <img src="images/client.jpg" alt />
                      </div>
                      <div className="detail-box">
                        <div className="name">
                          <h6>
                          Emily Carter
                          </h6>
                        </div>
                        <p>
                        Diakool's technicians are knowledgeable and courteous. They not only fixed our AC but also provided valuable tips for maintenance. Great service overall!
                        </p>
                        <i className="fa fa-quote-left" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel_btn-container">
              <a className="carousel-control-prev" href="#carouselExample2Controls" role="button" data-slide="prev">
                <i className="fa fa-long-arrow-left" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExample2Controls" role="button" data-slide="next">
                <i className="fa fa-long-arrow-right" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Client