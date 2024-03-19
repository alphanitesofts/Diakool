import React, { useEffect } from 'react'
import { useState } from 'react';
import FetchSpecifications from './FetchSpecification';
import FetchKeyFeatures from './FetchKeyFeatures';

import './CardStyles.css'

import image from '../../Image/banner1.jpg'

const imageUrl = 'https://supercoolacimages.alphanitesofts.net/';

const Specification = ({ specification, key_features }) => {

    const [selected, setSelected] = useState("Keys");

    return (
        <section className="specification-section" >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="product-spec">
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button
                                    onClick={() => setSelected("Keys")}
                                    className={selected === "Keys" ? "nav-link active" : "nav-link"} data-bs-toggle="tab" type="button" role="tab" >Key Features</button>
                                <button
                                    onClick={() => setSelected("Specifications")}
                                    className={selected === "Specifications" ? "nav-link active" : "nav-link"} data-bs-toggle="tab" type="button" role="tab">
                                    {console.log("Rendering Specifications tab content")} Specifications</button>
                                <button
                                    onClick={() => setSelected("Support")}
                                    className={selected === "Support" ? "nav-link active support" : "nav-link support"} data-bs-toggle="tab" type="button" role="tab" >Support</button>
                                <button
                                    onClick={() => setSelected("Buy")}

                                    className={selected === "Buy" ? "nav-link active support" : "nav-link support"} data-bs-toggle="tab" type="button" role="tab" >Where to Buy</button>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent" >
                            <div className={selected === "Keys" ? "tab-pane fade active show" : "tab-pane fade"} role="tabpanel" >
                                <div className="key-feature key-feature-100">
                                    {key_features &&
                                        key_features.map((item, index) => (
                                            <div className="key-feature-box key-feature-box-50" id='printablediv' key={index}>
                                                <div className="key-feature-box-img">
                                                    <img src={`${imageUrl}${item.image}`} className="img-fluid lazyload" alt="4 Way Swing" />
                                                </div>
                                                <div className="key-feature-box-content">
                                                    <h5>{item.name}</h5>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>

                            <div className={selected === "Specifications" ? "tab-pane fade active show" : "tab-pane fade"} role="tabpanel" >
                                <div className="specification">
                                    {specification &&
                                        specification.map((item, index) => (
                                            <div className="specification-box" key={index}>
                                                <div className="specification-box-name" id="printablediv">
                                                    <h6>{item.name}</h6>
                                                </div>
                                                <div className="specification-box-units">
                                                    <h6>{item.value}</h6>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>

                            <div className={selected === "Support" ? "tab-pane fade active show support" : "tab-pane fade support"} role="tabpanel" >
                                <div className="key-feature">
                                    <div className="key-feature-box">
                                        <div className="key-feature-box-img">
                                            <img src="/images/callIcon.webp" className="img-fluid lazyload" alt="phone" />
                                        </div>
                                        <div className="key-feature-box-content">
                                            <h5><a href="tel:+971505735436">+971505735436</a></h5>
                                        </div>
                                    </div>
                                    <div className="key-feature-box">
                                        <div className="key-feature-box-img">
                                            <img src="/images/whatsapp.webp" className="img-fluid lazyload" alt="whatsapp" />
                                        </div>
                                        <div className="key-feature-box-content">
                                            <h5><a href="https://wa.me/+971505735436"> +971505735436</a></h5>
                                        </div>
                                    </div>
                                    <div className="key-feature-box">
                                        <div className="key-feature-box-img">
                                            <img src="/images/email.webp" className="img-fluid lazyload" alt="email" />
                                        </div>
                                        <div className="key-feature-box-content">
                                            <h5><a href="mailto:Diakoolairconditioners@gmail.com">Diakoolairconditioners@gmail.com</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={selected === "Buy" ? "tab-pane fade active show support" : "tab-pane fade support"} role="tabpanel" >

                                {/*   <h4>KEY OUTLETS</h4>
                                <div className="col-keyout">
                                    <div className="col-key">
                                        <ul>
                                            <li>AL BAHRI WAREHOUSE # 16 AL ASAYEL STREET AL QUOZ IND 2 – DUBAI – UAE</li>
                                        </ul>
                                    </div>
                                 
                                    <div className="col-key">
                                        <ul>
                                            <li>Amman Street - Industrial Area 2 - Anjman</li>
                                        </ul>
                                    </div>
                                </div> */}
                                {/* <h4 className='mb-5'>BUY ONLINE</h4> */}

                                {/* <div className="online-flex">
                                    <div className="online-col">
                                        <img src="/images/whatsapp.png" className="img-fluid lazyload" alt="whatsapp" />
                                        <a href="https://wa.me/+971505735436?text=Hello%20there,%20I%20want%20to%20buy%20your%20product" target="_blank">Buy Now</a>
                                    </div>
                                    <div className="online-col ml-1">
                                        <img src="/images/facebook.png" className="img-fluid lazyload" alt="facebook" />
                                        <a href="https://www.facebook.com/profile.php?id=61554996632615&mibextid=9R9pXO" target="_blank">Buy Now</a>
                                    </div>
                                    <div className="online-col ml-1">
                                        <img src="/images/youtube-logo.webp" className="img-fluid lazyload" alt="facebook" />
                                        <a href="https://www.youtube.com/channel/UCpyCCBRs_mJgmPZThPY-MMA" target="_blank">Buy Now</a>
                                    </div>
                                    <div className="online-col ml-1">
                                        <img src="/images/instagram.png" className="img-fluid lazyload" alt="facebook" />
                                        <a href="https://www.instagram.com/diakool_airconditioners/" target="_blank">Buy Now</a>
                                    </div>
                                    <div className="online-col ml-1">
                                        <img src="/images/linkedIn.png" className="img-fluid lazyload" alt="facebook" />
                                        <a href="https://www.linkedin.com/in/diakool-air-conditioners-b206072a2/" target="_blank">Buy Now</a>
                                    </div>
                                </div> */}


                                {/* <article className="cardx">
                                    <img className="cardx__background" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} alt="Photo of Cartagena's cathedral at the background and some colonial style houses" width={1920} height={2193} />
                                    <div className="cardx__content | flow">
                                        <div className="cardx__content--container | flow">
                                            <h2 className="cardx__title text-white" style={{ marginTop: "50px" }}>BUY NOW</h2>
                                            <p className="cardx__description" style={{ color: "white", fontWeight: 800 }}>
                                                AL BAHRI WAREHOUSE # 16
                                                AL ASAYEL STREET
                                                AL QUOZ IND 2 – DUBAI – UAE

                                            </p>
                                            <p className="cardx__description mt-0" style={{ color: "white", fontWeight: 800 }}>
                                                Amman Street - Industrial Area 2 - Anjman
                                            </p>
                                        </div>
                                        <div className="d-flex">
                                            <a className='mx-1' href="https://wa.me/+971505735436?text=Hello%20there,%20I%20want%20to%20buy%20your%20product" target="_blank">
                                                <img src="/images/whatsapp.png" className="img-fluid lazyload" style={{ height: "35px" }} alt="whatsapp" />
                                            </a>
                                            <a className='mx-1' href="https://www.facebook.com/profile.php?id=61554996632615&mibextid=9R9pXO" target="_blank">
                                                <img src="/images/facebook.png" className="img-fluid lazyload" style={{ height: "35px" }} alt="facebook" />
                                            </a>
                                            <a className='mx-1' href="https://www.youtube.com/channel/UCpyCCBRs_mJgmPZThPY-MMA" target="_blank">
                                                <img src="/images/youtube-logo.webp" className="img-fluid lazyload" style={{ height: "35px" }} alt="facebook" />
                                            </a>
                                            <a className='mx-1' href="https://www.instagram.com/diakool_airconditioners/" target="_blank">
                                                <img src="/images/instagram.png" className="img-fluid lazyload" style={{ height: "35px" }} alt="facebook" />
                                            </a>
                                            <a className='mx-1' href="https://www.linkedin.com/in/diakool-air-conditioners-b206072a2/" target="_blank">
                                                <img src="/images/linkedIn.png" className="img-fluid lazyload" style={{ height: "35px" }} alt="facebook" />
                                            </a>
                                        </div>
                                    </div>
                                </article> */}



                                {/* <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className="card" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: "10px" }}>
                                            <div className="card-body">
                                                <h5 className="card-title text-white" style={{ marginTop: "250px", fontWeight: 800 }}>BUY NOW</h5>
                                                <p className="card-text text-white" style={{ fontWeight: 800 }}>AL BAHRI WAREHOUSE # 16 <br />
                                                    AL ASAYEL STREET <br />
                                                    AL QUOZ IND 2 – DUBAI – UAE</p>
                                                <p className="card-text text-white" style={{ fontWeight: 800 }}>Amman Street - Industrial Area 2 - Anjman</p>
                                                <div className="d-flex">
                                                    <a className='mx-1' href="https://wa.me/+971505735436?text=Hello%20there,%20I%20want%20to%20buy%20your%20product" target="_blank">
                                                        <img src="/images/whatsapp.png" className="img-fluid lazyload" style={{ height: "35px" }} alt="whatsapp" />
                                                    </a>
                                                    <a className='mx-1' href="https://www.facebook.com/profile.php?id=61554996632615&mibextid=9R9pXO" target="_blank">
                                                        <img src="/images/facebook.png" className="img-fluid lazyload" style={{ height: "35px" }} alt="facebook" />
                                                    </a>
                                                    <a className='mx-1' href="https://www.youtube.com/channel/UCpyCCBRs_mJgmPZThPY-MMA" target="_blank">
                                                        <img src="/images/youtube-logo.webp" className="img-fluid lazyload" style={{ height: "35px" }} alt="facebook" />
                                                    </a>
                                                    <a className='mx-1' href="https://www.instagram.com/diakool_airconditioners/" target="_blank">
                                                        <img src="/images/instagram.png" className="img-fluid lazyload" style={{ height: "35px" }} alt="facebook" />
                                                    </a>
                                                    <a className='mx-1' href="https://www.linkedin.com/in/diakool-air-conditioners-b206072a2/" target="_blank">
                                                        <img src="/images/linkedIn.png" className="img-fluid lazyload" style={{ height: "35px" }} alt="facebook" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div> */}


                                <div className="social-container">
                                    <ul className="social-icons">
                                        <h5 className="card-title text-dark" >BUY NOW</h5>
                                        <p className="card-text text-dark" >AL BAHRI WAREHOUSE # 16 <br />
                                            AL ASAYEL STREET <br />
                                            AL QUOZ IND 2 – DUBAI – UAE</p>
                                        <p className="card-text text-dark" >Amman Street - Industrial Area 2 - Anjman</p>

                                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                        <li><a href="#"><i className="fa fa-instagram" /></a></li>
                                        <li><a href="#"><i className="fa fa-youtube" /></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                                    </ul>
                                </div>



                                <ul className='icons-body'>
                                    <li className='icons-list'><a href="#"><i className="fab fa  fa-facebook" aria-hidden="true" /></a></li>
                                    <li className='icons-list'><a href="#"><i className="fab fa fa-twitter" aria-hidden="true" /></a></li>
                                    <li className='icons-list'><a href="#"><i className="fab fa fa-google-plus" aria-hidden="true" /></a></li>
                                    <li className='icons-list'><a href="#"><i className="fab fa fa-linkedin" aria-hidden="true" /></a></li>
                                    <li className='icons-list'><a href="#"><i className="fab fa fa-instagram" aria-hidden="true" /></a></li>
                                </ul>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Specification