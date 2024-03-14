import React, { useEffect, useState } from 'react';
import './shopStyle.css';
import { Link } from 'react-router-dom';
import fetchData from './AdvanceSearchSlice';
import { useParams } from 'react-router-dom';
import SearchList from './SearchList';

const imageUrl = 'https://supercoolacimages.alphanitesofts.net/';

const SearchProduct = () => {

    const { query } = useParams();

  const acCategories = ['Window AC', 'Portable AC', 'Floor Standing AC', 'Cassette AC', 'Light Commercial AC - Duct Type', 'Air Curtain'];
  const CapacityBTU = ['9000-12000 BTUs', '12000-18000 BTUs', '18000-24000 BTUs', '24000-30000 BTUs', '30000-36000 BTUs', '36000-48000 BTUs', '48000-60000 BTUs', '70000 BTUs & above'];
  const compressorType = ['Reciprocating', 'Scroll', 'Rotary', 'Inverter'];

  const [selectedACType, setSelectedACType] = useState([]);
  const [selectedCapacityBTU, setSelectedCapacityBTU] = useState([]);
  const [selectedCompressorType, setSelectedCompressorType] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(100);
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [allAcs, setAllAcs] = useState([]);
  const [filteredAcs, setFilteredAcs] = useState([]);

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const handleACTypeChange = (value) => {
    setSelectedACType(value);
    filterData(value, selectedCapacityBTU, selectedCompressorType);
  };

  const handleCapacityBTUChange = (value) => {
    setSelectedCapacityBTU(value);
    filterData(selectedACType, value, selectedCompressorType);
  };

  const handleCompressorTypeChange = (value) => {
    setSelectedCompressorType(value);
    filterData(selectedACType, selectedCapacityBTU, value);
  };

  const filterData = (acType, capacity, compressor) => {
    const filteredData = allAcs.filter((item) => {
      return (
        (acType.length === 0 || acType.includes(item.type)) &&
        (capacity.length === 0 || capacity.includes(item.capacity)) &&
        (compressor.length === 0 || compressor.includes(item.compressor))
      );
    });

    setFilteredAcs(filteredData);
  };

  async function fetchDataAndProcess() {
    try {
      const data = await SearchList(query);
      if (data !== null) {
        setAllAcs(data.data);
        setFilteredAcs(data.data)
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  useEffect(() => {
    fetchDataAndProcess();
  }, [query]);



    return (
        <section className="category-section" id="catergory-selection">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="category-page-heading">
                            <h1 >Search Result For {query?query:""} is Below!</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
              
                
                    <div className="col-lg-10 col-md-8 col-12 mx-auto">
        <div className="product-category-data">
          <div className="product-category-sec">
            {filteredAcs ? (
              filteredAcs.slice(0, visibleProducts).map((item, index) => (
                <div className="product-box" key={index}>
                                            <div className="product-box-top">
                                                <div className="products-links">
                                                    <div className="products-link-one">
                                                        <a className="compare" data-slug="36000-btus-split-air-conditioners-eforce-series">
                                                            <img alt="compare-36000 BTUs Split Air Conditioners – eForce Series" src="https://www.supergeneral.com/public/images/icon/compare.png" className="img-fluid lazyload" />Compare
                                                        </a>
                                                    </div>
                                                    <div className="products-link-one share-btn">
                                                        <a rel="nofollow" href="">
                                                            <img alt="share-36000 BTUs Split Air Conditioners – eForce Series" src="https://www.supergeneral.com/public/images/icon/share.png" className="img-fluid lazyload" />Share
                                                        </a>
                                                        <a rel="nofollow" href="#" className="fb_share share-social" target="_blank">
                                                            <i className="fab fa-facebook" aria-hidden="true"></i>
                                                        </a>
                                                        <a rel="nofollow" className="mail_share share-social" href="#">
                                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                                        </a>
                                                        <a rel="nofollow" href="#" className="whatsup_share share-social" target="_blank">
                                                            <i className="fab fa-whatsapp" aria-hidden="true"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product-image">
                                                    {item?.image ? (
                                                        <a>
                                                            <img title="36000 BTUs Split Air Conditioners – eForce Series" src={`${imageUrl}${item.image[0]}`} alt={item.name} className="img-fluid lazyload" />
                                                        </a>
                                                    ) : (
                                                        <img title="36000 BTUs Split Air Conditioners – eForce Series" src="https://www.supergeneral.com/media/products/9/sgs380he.webp" alt={item.name} className="img-fluid lazyload" />

                                                    )}
                                                </div>
                                            </div>
                                            <div className="product-box-meta">
                                                <div className="product-txt">
                                                    <h3>{item.name}</h3>
                                                    {/* <p className="product-code">SGS372HE</p> */}
                                                </div>
                                                <div className="product-btn">
                                                    <Link to={`/productdetails/${item.id}`}>Learn More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))) : (
                                    <p>Loading...</p>
                                )}
                            </div>
                        </div>
                        {/* {filteredProducts && visibleProducts < filteredProducts.length && (
                            <div data-limit="12" data-total="148" data-remaining="136" data-category="air-conditioners" className="btn-know-more text-center">
                                <button id="load-more-products" data-start="1" onClick={loadMoreProducts}>Load More</button>
                            </div>
                        )} */}
                    </div>
                </div>
                <div className="col-12">
                    <div className="category-description">
                        <h2>Buy Residential Air Conditioners at the Best Price in the UAE</h2>
                        <p>Gone are the days of tedious in-person buying. And even though we have more intense summers these days, we don’t have to spend long hours perusing air conditioners in-person at appliance shops. These days, browsing air conditioners has gotten a whole lot easier in the comfort of our homes. And Super General has a fantastic range of residential air conditioners available online. You are sure to find the residential air condition that suits your needs and your price range for sure! But, before you take the plunge, here are a few things you should consider before buying the right AC for your home.</p>
                        <div className="moretext" style={{ display: "block" }}>
                            <p>From their inception, residential air conditioning systems have made our lives easier. The basic categories of Air conditioners are Window AC, Split AC, Portable AC and Inverter AC.</p>

                            <p><b>Window AC-</b>
                                In the Super General online store you can find compact window air conditioners that are ideal for someone on a budget and also for smaller apartments where space is tight. You can find the best selection of name brand ACs from a large variety of window ACs from 0.7 tons to 1 ton. Additionally, these units have a single compact profile that integrates the compressor, condenser valve and other components making these ACs serious space savers. If you have a space that is around 200-400 sq ft. a window AC is the perfect pick for you.</p>
                            <p><b>Split AC- </b>
                                Perhaps the most versatile air conditioners out there in the market today, split unit ACs are perfect for every space. <a href="#">Split unit ACs</a> come in various sizes and aesthetics to suit your cooling and decor needs. At Super General’s online store, you can find the AC that works for you. Apart from a fantastic cooling system, these ACs come with additional filters to keep your home dust and germ free. If you’re looking for ways to save energy and cut down on your electric bill, an inverter AC is your best friend. A subtype of the Split AC, Inverter ACs, on average help cut down electricity bills by 30-50%. They also cool rooms faster.</p>
                            <p><b>Portable AC- </b>
                                If you are on the move a lot and change homes often, a <a href="#">portable AC</a> is a good investment for you. Super General offers 9000 BTUs – 18000 BTU for some serious cooling. What’s more, these ACs have all the features of split ACs and window ACs. These ACs are a great investment for specific cooling needs, especially if you like the option of moving your AC from one place to another.</p>
                            <p><b>Floor standing AC- </b>
                                As the name suggests a <a href="#">floor AC stands</a> on the floor unlike its counterpart that is wall mounted. Floor ACs are ideal for places like restaurants, halls, motels and banks. Floor ACs usually have a higher tonnage and hence more cooling capacity.</p>

                            <p>Shopping at <a href="#" title="" target="">Super General</a> is super easy. Once you’ve weighed all the odds, come down to our store, speak to our team of experts and let the magic happen.</p>
                        </div>                </div>
                </div>
                <div className="col-12">
                    <ul className="catergory-list-header list-inline text-center">
                        <li className="list-inline-item"><Link to='/'>Home</Link></li>
                        {/* <li className="list-inline-item"><a href="https://www.supergeneral.com/ae/products">Product Category</a></li> */}
                        {/* <li className="list-inline-item"><a href="https://www.supergeneral.com/ae/products/air-conditioners">Air Conditioners</a></li> */}
                    </ul>
                </div>
            </div>
        </section>


    )

}


export default SearchProduct