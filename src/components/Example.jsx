import React from "react";

function Example(){

    return (

   <div>
  <div className="hero_area">
    <div className="hero_bg_box">
      <img src="images/hero-bg.png" alt />
    </div>
    {/* header section strats */}
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="index.html">
            <span>
              Orthoc
            </span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html"> About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="departments.html">Departments</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="doctors.html">Doctors</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">Contact Us</a>
              </li>
              <form className="form-inline">
                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                  <i className="fa fa-search" aria-hidden="true" />
                </button>
              </form>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    {/* end header section */}
    {/* slider section */}
    <section className="slider_section ">
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-md-7">
                  <div className="detail-box">
                    <h1>
                      We Provide Best Healthcare
                    </h1>
                    <p>
                      Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                    </p>
                    <div className="btn-box">
                      <a href className="btn1">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="container ">
              <div className="row">
                <div className="col-md-7">
                  <div className="detail-box">
                    <h1>
                      We Provide Best Healthcare
                    </h1>
                    <p>
                      Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                    </p>
                    <div className="btn-box">
                      <a href className="btn1">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-7">
                  <div className="detail-box">
                    <h1>
                      We Provide Best Healthcare
                    </h1>
                    <p>
                      Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                    </p>
                    <div className="btn-box">
                      <a href className="btn1">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ol className="carousel-indicators">
          <li data-target="#customCarousel1" data-slide-to={0} className="active" />
          <li data-target="#customCarousel1" data-slide-to={1} />
          <li data-target="#customCarousel1" data-slide-to={2} />
        </ol>
      </div>
    </section>
    {/* end slider section */}
  </div>
  {/* department section */}
  <section className="department_section layout_padding">
    <div className="department_container">
      <div className="container ">
        <div className="heading_container heading_center">
          <h2>
            Our Departments
          </h2>
          <p>
            Asperiores sunt consectetur impedit nulla molestiae delectus repellat laborum dolores doloremque accusantium
          </p>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="box ">
              <div className="img-box">
                <img src="images/s1.png" alt />
              </div>
              <div className="detail-box">
                <h5>
                  Cardiology
                </h5>
                <p>
                  fact that a reader will be distracted by the readable page when looking at its layout.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="box ">
              <div className="img-box">
                <img src="images/s2.png" alt />
              </div>
              <div className="detail-box">
                <h5>
                  Diagnosis
                </h5>
                <p>
                  fact that a reader will be distracted by the readable page when looking at its layout.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="box ">
              <div className="img-box">
                <img src="images/s3.png" alt />
              </div>
              <div className="detail-box">
                <h5>
                  Surgery
                </h5>
                <p>
                  fact that a reader will be distracted by the readable page when looking at its layout.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="box ">
              <div className="img-box">
                <img src="images/s4.png" alt />
              </div>
              <div className="detail-box">
                <h5>
                  First Aid
                </h5>
                <p>
                  fact that a reader will be distracted by the readable page when looking at its layout.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-box">
          <a href>
            View All
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* end department section */}
  {/* about section */}
  <section className="about_section layout_margin-bottom">
    <div className="container  ">
      <div className="row">
        <div className="col-md-6 ">
          <div className="img-box">
            <img src="images/about-img.jpg" alt />
          </div>
        </div>
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h2>
                About <span>Us</span>
              </h2>
            </div>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words which don't look even slightly believable. If you
              are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
              the middle of text. All
            </p>
            <a href>
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end about section */}
  {/* doctor section */}
  <section className="doctor_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Our Doctors
        </h2>
        <p className="col-md-10 mx-auto px-0">
          Incilint sapiente illo quo praesentium officiis laudantium nostrum, ad adipisci cupiditate sit, quisquam aliquid. Officiis laudantium fuga ad voluptas aspernatur error fugiat quos facilis saepe quas fugit, beatae id quisquam.
        </p>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-4 mx-auto">
          <div className="box">
            <div className="img-box">
              <img src="images/d1.jpg" alt />
            </div>
            <div className="detail-box">
              <div className="social_box">
                <a href>
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
                <a href>
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
                <a href>
                  <i className="fa fa-youtube" aria-hidden="true" />
                </a>
                <a href>
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
              </div>
              <h5>
                Elina Josh
              </h5>
              <h6 className>
                Doctor
              </h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 mx-auto">
          <div className="box">
            <div className="img-box">
              <img src="images/d2.jpg" alt />
            </div>
            <div className="detail-box">
              <div className="social_box">
                <a href>
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
                <a href>
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
                <a href>
                  <i className="fa fa-youtube" aria-hidden="true" />
                </a>
                <a href>
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
              </div>
              <h5>
                Adam View
              </h5>
              <h6 className>
                Doctor
              </h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 mx-auto">
          <div className="box">
            <div className="img-box">
              <img src="images/d3.jpg" alt />
            </div>
            <div className="detail-box">
              <div className="social_box">
                <a href>
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
                <a href>
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
                <a href>
                  <i className="fa fa-youtube" aria-hidden="true" />
                </a>
                <a href>
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
              </div>
              <h5>
                Mia Mike
              </h5>
              <h6 className>
                Doctor
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-box">
        <a href>
          View All
        </a>
      </div>
    </div>
  </section>
  {/* end doctor section */}
  {/* contact section */}
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
            <form action>
              <div className="form-row">
                <div className="col-lg-6">
                  <div>
                    <input type="text" placeholder="Your Name" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div>
                    <input type="text" placeholder="Phone Number" />
                  </div>
                </div>
              </div>
              <div>
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <input type="text" className="message-box" placeholder="Message" />
              </div>
              <div className="btn_box">
                <button>
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="map_container">
            <div className="map">
              <div id="googleMap" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end contact section */}
  {/* client section */}
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
                        Alan Emerson
                      </h6>
                    </div>
                    <p>
                      Enim consequatur odio assumenda voluptas voluptatibus esse nobis officia. Magnam, aspernatur nostrum explicabo, distinctio laudantium delectus deserunt quia quidem magni corporis earum inventore totam consectetur corrupti! Corrupti, nihil sunt? Natus.
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
                        Alan Emerson
                      </h6>
                    </div>
                    <p>
                      Enim consequatur odio assumenda voluptas voluptatibus esse nobis officia. Magnam, aspernatur nostrum explicabo, distinctio laudantium delectus deserunt quia quidem magni corporis earum inventore totam consectetur corrupti! Corrupti, nihil sunt? Natus.
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
                        Alan Emerson
                      </h6>
                    </div>
                    <p>
                      Enim consequatur odio assumenda voluptas voluptatibus esse nobis officia. Magnam, aspernatur nostrum explicabo, distinctio laudantium delectus deserunt quia quidem magni corporis earum inventore totam consectetur corrupti! Corrupti, nihil sunt? Natus.
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
  {/* end client section */}
  {/* footer section */}
  <footer className="footer_section">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3 footer_col">
          <div className="footer_contact">
            <h4>
              Reach at..
            </h4>
            <div className="contact_link_box">
              <a href>
                <i className="fa fa-map-marker" aria-hidden="true" />
                <span>
                  Location
                </span>
              </a>
              <a href>
                <i className="fa fa-phone" aria-hidden="true" />
                <span>
                  Call +01 1234567890
                </span>
              </a>
              <a href>
                <i className="fa fa-envelope" aria-hidden="true" />
                <span>
                  demo@gmail.com
                </span>
              </a>
            </div>
          </div>
          <div className="footer_social">
            <a href>
              <i className="fa fa-facebook" aria-hidden="true" />
            </a>
            <a href>
              <i className="fa fa-twitter" aria-hidden="true" />
            </a>
            <a href>
              <i className="fa fa-linkedin" aria-hidden="true" />
            </a>
            <a href>
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 footer_col">
          <div className="footer_detail">
            <h4>
              About
            </h4>
            <p>
              Beatae provident nobis mollitia magnam voluptatum, unde dicta facilis minima veniam corporis laudantium alias tenetur eveniet illum reprehenderit fugit a delectus officiis blanditiis ea.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-2 mx-auto footer_col">
          <div className="footer_link_box">
            <h4>
              Links
            </h4>
            <div className="footer_links">
              <a className="active" href="index.html">
                Home
              </a>
              <a className href="about.html">
                About
              </a>
              <a className href="departments.html">
                Departments
              </a>
              <a className href="doctors.html">
                Doctors
              </a>
              <a className href="contact.html">
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 footer_col ">
          <h4>
            Newsletter
          </h4>
          <form action="#">
            <input type="email" placeholder="Enter email" />
            <button type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="footer-info">
        <p>
          © <span id="displayYear" /> All Rights Reserved By
          <a href="https://html.design/">Free Html Templates<br /><br /></a>
          © <span id="displayYear" /> Distributed By
          <a href="https://themewagon.com/">ThemeWagon</a>
        </p>
      </div>  
    </div>
  </footer>
</div>
    )

}

export default Example