import React from "react";
import { Link } from "react-router-dom";
import turboCool from '../Image/Turbo Cool.jpg'

function Department() {

  const data = [
    {
      "id": 1,
      "type": "Split AC",
      "image": "images/airconditioner.png",
      "description": "Choose our Split Air Conditioners for efficient cooling and energy savings. Perfect for individual rooms."
    },
    {
      "id": 2,
      "type": "Window AC",
      "image": "images/windowac.png",
      "description": "Discover the convenience of our Window Air Conditioners. Easy to install and ideal for smaller spaces."
    },
    {
      "id": 3,
      "type": "Portable AC",
      "image": "images/portableac.png",
      "description": "Enjoy portability with our Portable Air Conditioners. Move them wherever you need a cool breeze."
    },
    {
      "id": 4,
      "type": "Ducted AC",
      "image": "images/aircurtain.png",
      "description": "Opt for Ducted Air Conditioners for a centralized cooling solution. Perfect for larger spaces and offices."
    }
  ]

  return (
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
            {
              data.map((items, index) => {
                return (
                  <>
                    <div className="col-md-3" key={index}>
                      <Link to='/productlisting' state={{item: items.type}} className="box ">
                        <div className="img-box">
                          <img src={items.image} alt />
                        </div>
                        <div className="detail-box">
                          <h5>{items.type}</h5>
                          {/* <p>{items.description}</p> */}
                        </div>
                      </Link>
                    </div>
                  </>
                )
              })
            }
          </div>
          <div className="btn-box">
            <Link to="/productlisting">
              View All
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-12 p-0" style={{marginTop:"65px"}}>
        <div>
          <img
            src={turboCool}
            alt="Second Image"
            className="img-fluid" />
        </div>
      </div>
    </section>
  )
}

export default Department