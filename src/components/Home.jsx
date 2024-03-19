import React from "react";
import Department from "./Department";
import About from "./About";
import Doctors from "./Doctors";
import Contact from "./Contact";
import Client from "./Client";
import Services from "./Services";
import Blogs from "./Blogs";
import OurRecord from "./OurRecord/OurRecord";
import ChooseUs from "./ChooseUs/ChooseUs";
import ExtraOne from "./ExtraOne/ExtraOne";
import ExtraTwo from "./ExtraTwo/ExtraTwo";
import image from '../Image/banner1.jpg'

function Home() {
  return (
    <div>
      {/* <section className="slider_section" > */}
      <div id="demo" class="carousel slide" data-ride="carousel">

        {/* <!-- Indicators --> */}
        <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
          <li data-target="#demo" data-slide-to="3"></li>
          <li data-target="#demo" data-slide-to="4"></li>
          <li data-target="#demo" data-slide-to="5"></li>
        </ul>

        {/* <!-- The slideshow --> */}
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={image} alt="Los Angeles" className="w-100" />
          </div>
          <div class="carousel-item">
            <img src="images/Artb – 1 (1).png" alt="Los Angeles" className="w-100" />
          </div>
          <div class="carousel-item">
            <img src="images/Artb – – (1).png" alt="Chicago" className="w-100" />
          </div>
          <div class="carousel-item">
            <img src="images/Artb –.png" alt="New York" className="w-100" />
          </div>
          <div className="carousel-item">
            <img src="/images/Diakol web banner 4.png" alt="img" className="w-100" />
          </div>
          <div className="carousel-item">
            <img src="/images/Diakol web banner 5.png" alt="img" className="w-100" />
          </div>
        </div>

        {/* <!-- Left and right controls --> */}
        <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>


      <Department />
      <About />
      <OurRecord />
      <ChooseUs />
      <ExtraOne />
      <ExtraTwo />
      {/* <Services /> */}
      {/* <Client /> */}
      {/* <Doctors /> */}
      {/* <Blogs/> */}
      <Contact />

    </div>

  )
}
export default Home