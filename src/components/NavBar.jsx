import React, { useState } from "react";
import { Link } from "react-router-dom";
import Diakool from '../Image/Diakool.png'
import '../../src/App.css';

function NavBar() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [input,setInput] =useState("")

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  return (
    <div>
  <div className="container-fluid banner" style={{ backgroundColor: "rgba(28, 63, 148)", height: "25%",marginTop:-20 }}>
        <div className="row align-items-center support">
          {/* <div className="col-12">
            <p className="text-white text-center">
              We are the top-selling brand in UAE
            </p>
          </div> */}
          {/* Social Icons */}
          <div className="col-12 text-right ">
            {/* Add your social icons here */}
            <a href="https://www.facebook.com/profile.php?id=61554996632615&mibextid=9R9pXO" target="_blank" >
              <i className="fa fa-facebook mx-2" style={{ color: "white", fontSize: "22px" }}></i>
            </a>
            <a href="https://www.linkedin.com/in/diakool-air-conditioners-b206072a2/" target="_blank">
                  <i className="fa fa-linkedin" aria-hidden="true" style={{ color: "white", fontSize: "22px" }}/>
                </a>
            <a href="https://www.instagram.com/diakool_airconditioners/ " target="_blank">
            <i className="fa fa-instagram mx-2" style={{ color: "white", fontSize: "22px"  }}></i></a>
            <a href="https://www.youtube.com/channel/UCpyCCBRs_mJgmPZThPY-MMA" target="_blank">
                  <i className="fa fa-youtube" aria-hidden="true" style={{ color: "white", fontSize: "22px"  }}/>
                </a>
          </div>  
        </div>
      </div>

    <header className="header_section">
    <div className="container">
      <nav className="navbar navbar-expand-lg custom_nav-container">
        <a className="navbar-brand" href="/">
          {/* <span>DIACOOL</span> */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
              <div style={{ width: '120px', height: '60px' }}>
                <img src={Diakool} style={{objectFit:"cover"}} alt="Diakool Logo"  />
              </div>
            </Link>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {showSearchBar ? (
            // Search Bar
            <form className="form-inline ml-auto">
              <input
                className="form-control mr-sm-2 search-input"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
              />
                    <Link className="nav-link" to={`searchProduct/${input}`}>
            
              <button
                className="btn btn-outline-success my-2 my-sm-0 search-button"
                type="submit"
              >
                <i className="fa fa-search" aria-hidden="true" />
              </button>
              </Link>
              <button
                className="btn btn-outline-danger my-2 my-sm-0 ml-2 close-button"
                type="button"
                onClick={toggleSearchBar}
              >
                <i className="fa fa-times" aria-hidden="true" />
              </button>
            </form>
          )  : (
              // Navigation Links
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="productlisting">
                    All Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="specialities">
                    Features
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="departments">
                    Hot
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="doctors">
                    Heads
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="blogs">
                    Blogs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="contact">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-primary my-2 my-sm-0 ml-2"
                    type="button"
                    onClick={toggleSearchBar}
                  >
                    <i className="fa fa-search" aria-hidden="true" />
                  </button>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
    <div className="container-fluid bottom-bar" style={{ backgroundColor: "rgba(28, 63, 148)", height: "5px" }}></div>
    </div>

  );
}

export default NavBar;
