import React, { useEffect } from 'react'
import { useState } from 'react';
import FetchSpecifications from './FetchSpecification';
import FetchKeyFeatures from './FetchKeyFeatures';
const imageUrl = 'https://supercoolacimages.alphanitesofts.net/';
const Specification = ({ specification, key_features }) => {
    const [selected, setSelected] = useState("Keys")
    // console.log(specification, "spec")
    // console.log(key_features, 'key')
    // const [specification, setSpecification] = useState('');
    // const [key_features, setKey_features] = useState('');
    // async function FetchSpecification() {
    //     try {
    //         const data = await FetchSpecifications(product.id);
    //         if (data !== null) {
    //             setSpecification(data?.Specification);
    //         }
    //     } catch (error) {
    //         console.error('Error:', error.message);
    //     }
    // }
    // async function FetchKeyFeature() {
    //     try {
    //         const data = await FetchKeyFeatures(product.id);
    //         if (data !== null) {
    //             setKey_features(data?.key_features);
    //             // console.log(data);
    //         }
    //     } catch (error) {
    //         console.error('Error:', error.message);
    //     }
    // }

    // useEffect(() => {
    //     FetchSpecification();
    //     FetchKeyFeature();
    // }, []);

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
                                <h4>KEY OUTLETS</h4>
                                <div className="col-keyout">
                                    <div className="col-key">
                                        <ul>
                                            <li>AL BAHRI WAREHOUSE # 16 AL ASAYEL STREET AL QUOZ IND 2 – DUBAI – UAE</li>
                                        </ul>
                                    </div>
                                    <div className="col-key">
                                        {/* <ul>
                                            <li>KM Trading</li>
                                            <li>Lulu</li>
                                            <li>Nesto</li>
                                            <li>Safeer</li>
                                        </ul> */}
                                    </div>
                                    <div className="col-key">
                                        <ul>
                                            <li>Amman Street - Industrial Area 2 - Anjman</li>
                                        </ul>
                                    </div>
                                </div>
                                <h4>BUY ONLINE</h4>
                                <div className="online-flex">
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
                                </div>
                                {/* <div className="d-none">
                                    <div className="showroom-box-row">
                                        <div className="showroom-box">
                                            <div className="showroom-box-city">
                                                <h3>DUBAI</h3>
                                                <div className="showroom-flex">
                                                    <div className="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/location.png" className="img-fluid lazyload" />
                                                    </div>
                                                    <div className="showroom-flex-text">MPC Building, Airport Road, Near Cargo Village,<br /> P.O. Box No: 51027, Dubai, UAE.</div>
                                                </div>
                                                <div className="showroom-flex">
                                                    <div className="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/call.png" className="img-fluid lazyload" />
                                                    </div>
                                                    <div className="showroom-flex-text">04-2501230</div>
                                                </div>
                                                <div className="showroom-flex">
                                                    <div className="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/telephone.png" className="img-fluid lazyload" />
                                                    </div>
                                                    <div className="showroom-flex-text">04-2501265</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="showroom-box">
                                            <div className="showroom-box-city border-right-0">
                                                <h3>DUBAI</h3>
                                                <div className="showroom-flex">
                                                    <div className="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/location.png" className="img-fluid lazyload" />
                                                    </div>
                                                    <div className="showroom-flex-text">Behind Sabkha Bus Station,<br /> Fikree Market, Deira – Dubai, UAE.</div>
                                                </div>
                                                <div className="showroom-flex">
                                                    <div className="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/call.png" className="img-fluid lazyload" />
                                                    </div>
                                                    <div className="showroom-flex-text">04-2252682</div>
                                                </div>
                                                <div className="showroom-flex">
                                                    <div className="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/telephone.png" className="img-fluid lazyload" />
                                                    </div>
                                                    <div className="showroom-flex-text">04-2265793</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="showroom-box">
                                            <div className="showroom-box-city">
                                                <h3>DUBAI</h3>
                                                <div className="showroom-flex">
                                                    <div className="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/location.png" className="img-fluid lazyload" />
                                                    </div>
                                                    <div className="showroom-flex-text">Behind Sabkha Bus Station, Back Side of <br /> Grand Sina Hotel, Fikree Market, Deira – Dubai, UAE.</div>
                                                </div>
                                                <div className="showroom-flex">
                                                    <div className="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/call.png" className="img-fluid lazyload" />
                                                    </div>
                                                    <div className="showroom-flex-text">04-2252936</div>
                                                </div>
                                                <div className="showroom-flex">
                                                    <div className="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/telephone.png" className="img-fluid lazyload" />
                                                    </div>
                                                    <div className="showroom-flex-text">04-2252049</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="showroom-box">
                                            <div className="showroom-box-city border-right-0">
                                                <h3>SHARJAH</h3>
                                                <div className="showroom-flex">
                                                    <div className="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/location.png" className="img-fluid lazyload" />
                                                    </div>
                                                    <div className="showroom-flex-text">Al Arooba Building, Opposite of Al Ansari Exchange,<br /> Next to Manama Supermarket, Rolla – Sharjah, UAE.</div>
                                                </div>
                                                <div className="showroom-flex">
                                                    <div className="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/call.png" className="img-fluid lazyload" />
                                                    </div>
                                                    <div className="showroom-flex-text">06-5680255</div>
                                                </div>
                                                <div className="showroom-flex">
                                                    <div className="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/telephone.png" className="img-fluid lazyload" />
                                                    </div>
                                                    <div className="showroom-flex-text">06-5680688</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="showroom-box mb-0">
                                            <div className="showroom-box-city border-right-0 border-bottom-0">
                                                <h3>ABU DHABI</h3>
                                                <div className="showroom-flex">
                                                    <div className="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/location.png" className="img-fluid lazyload" />
                                                    </div>
                                                    <div className="showroom-flex-text">Building – 188, Shabia – 10, Next To Pure Veg <br />Restaurant, Nearby Al Jazeera Medical Centre<br /> Bus Stop, Musaffah, Abudhabi.</div>
                                                </div>
                                                <div className="showroom-flex">
                                                    <div className="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/call.png" className="img-fluid lazyload" />
                                                    </div>
                                                    <div className="showroom-flex-text">02-4476047</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="d-none">
                                    <div className="showroom-box-row">
                                        <div className="showroom-box">
                                            <div className="showroom-box-city">
                                                <h3>SHOWROOM</h3>
                                                <div className="showroom-flex">
                                                    <div className="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/location.png" className="img-fluid lazyload" />
                                                    </div>
                                                    <div className="showroom-flex-text">Musannah – Tareef, Oman</div>
                                                </div>
                                                <div className="showroom-flex">
                                                    <div className="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/call.png" className="img-fluid lazyload" />
                                                    </div>
                                                    <div className="showroom-flex-text">00968 26869724</div>
                                                </div>
                                                <div className="showroom-flex">
                                                    <div className="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/telephone.png" className="img-fluid lazyload" />
                                                    </div>
                                                    <div className="showroom-flex-text">00968 26970080</div>
                                                </div>
                                                <div className="showroom-flex">
                                                    <div className="showroom-flex-icon">
                                                        <img data-src="https://supergeneral.com/public/images/icon/mail.png" className="img-fluid lazyload" />
                                                    </div>
                                                    <div className="showroom-flex-text">sgcmusannah@supergeneral.ae</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Specification