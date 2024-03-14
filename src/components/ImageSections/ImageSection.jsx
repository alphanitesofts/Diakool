import React from 'react';
import Banner from '../../Image/banner1.jpg'
import Banner2 from '../../Image/banner2.jpg'

const ImageSection = () => {
  return (
    <div className="container-fluid ">
    <div className="row ">
      <div className="col-md-12 mb-4 m-0 p-0">
        <div>
          <img src='/images/Web 1920 – 2.png'
          alt="First Image"
            className="img-fluid" />
          {/* <div className="card-body">
            <p className="card-text">
              Your first paragraph here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
            <button className="btn btn-primary">Contact Now</button>
          </div> */}
        </div>
      </div>
      <div className="col-md-12 mb-4 m-0 p-0">
        <div>
          <img
          src='/images/Web 1920 – 1.png'
          alt="Second Image"
            className="img-fluid" />
          {/* <div className="card-body">
            <p className="card-text">
              Your second paragraph here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
            <button className="btn btn-primary">Contact Now</button>
          </div> */}
        </div>
      </div>
    </div>
  </div>
  );
};

export default ImageSection;
