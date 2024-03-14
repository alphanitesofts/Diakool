import React, { useEffect, useRef, useState } from 'react';
import './productListing.css';
import Specification from './Specification';
import FetchAcDetails from './FetchAcDetails';
import { useParams } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
// import JSZip from 'jszip';
// import { saveAs } from 'file-saver';
import ProductInvoice from "./ProductInvoice";
import FetchKeyFeatures from './FetchKeyFeatures';
import FetchSpecifications from './FetchSpecification';
import ImageSection from '../ImageSections/ImageSection';
const imageUrl = 'https://supercoolacimages.alphanitesofts.net/';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState("");
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [showMagnifier, setShowMagnifier] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [showInvoice, setShowInvoice] = useState(false);
    const [specification, setSpecification] = useState('');
    const [key_features, setKey_features] = useState('');
    const componentRef = useRef();
    const openLightbox = (index) => {
        setPhotoIndex(index);
        setLightboxIsOpen(true);
    };
    async function fetchDataAndProcess() {
        try {
            const data = await FetchAcDetails(productId);
            if (data !== null) {
                setProduct(data?.data);
                setSpecification(data?.specifications);
                setKey_features(data?.key_features);
                console.log(data?.specifications)
                console.log(data?.key_features)
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    // async function FetchSpecification() {
    //     try {
    //         const data = await FetchSpecifications(productId);
    //         if (data !== null) {
    //             setSpecification(data?.Specification);
    //             // console.log(data?.Specification)
    //         }
    //     } catch (error) {
    //         console.error('Error:', error.message);
    //     }
    // }
    // async function FetchKeyFeature() {
    //     try {
    //         const data = await FetchKeyFeatures(productId);
    //         if (data !== null) {
    //             setKey_features(data?.key_features);
    //             // console.log(data?.key_features);
    //         }
    //     } catch (error) {
    //         console.error('Error:', error.message);
    //     }
    // }


    useEffect(() => {
        fetchDataAndProcess();
        // FetchSpecification();
        // FetchKeyFeature();
    }, []);



    const handleMouseHover = (e) => {
        const container = e.currentTarget;
        const { left, top, width, height } = container.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;

        if (x >= 0 && x <= 100 && y >= 0 && y <= 100) {
            setPosition({ x, y });
            setCursorPosition({ x: e.pageX - left, y: e.pageY - top });
            setShowMagnifier(true);
        } else {
            setShowMagnifier(false);
        }
    };

    // if (productLoading) {
    //     return <div>Loading...</div>;
    // } else if (productError) {
    //     return <div>Error...</div>;
    // }
    // const imges = [
    //     {
    //         original: "https://picsum.photos/id/1018/1000/600/",
    //         thumbnail: "https://picsum.photos/id/1018/250/150/"
    //     },
    //     {
    //         original: "https://picsum.photos/id/1015/1000/600/",
    //         thumbnail: "https://picsum.photos/id/1015/250/150/"
    //     },
    //     {
    //         original: "https://picsum.photos/id/1019/1000/600/",
    //         thumbnail: "https://picsum.photos/id/1019/250/150/"
    //     }
    // ]
    const imges = product?.image?.map((image) => ({
        original: `${imageUrl}${image.replace(/\s/g, '%20')}`,
        thumbnail: `${imageUrl}${image.replace(/\s/g, '%20')}`,

    })) || [];
    const thumbnails = imges.map((img) => img.thumbnail);
    const originals = imges.map((img) => img.original);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,

    });
    const handleDownloadImages = () => {
        // console.log(originals[photoIndex]);
        if (product && product.image) {
            var element = document.createElement("a");
            var file = new Blob(
                [
                    `https://supercoolacimages.alphanitesofts.net/1703778092_Group%201.png`
                ],
                { type: "image/*" }
            );
            element.href = URL.createObjectURL(file);
            element.download = `https://supercoolacimages.alphanitesofts.net/1703778092_Group%201.png`
            element.click();
        }
    };
    return (
        <>
            {
                product !== "" &&
                <section className="product-display" data-title="36000-btus-split-air-conditioners-eforce-series">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-7 col-md-8 col-12">
                                <div className="products-details">
                                    <div className="product-display-box">
                                        <div className="thumbnails splide">
                                            <div className="splide__track">
                                                <ul className="splide__list">
                                                    {thumbnails.map((img, index) => (
                                                        <li key={index} className="list-unstyled splide__slide">
                                                            <img
                                                                src={img}
                                                                alt={`Thumbnail ${index + 1}`}
                                                                className="lazyload prduct-imgs w-50"
                                                                onClick={() => openLightbox(index)}
                                                            />
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div id="primary-slider" className="splide">
                                            <div className="splide__track">
                                                <ul className="splide__list">
                                                    <li className="splide__slide">
                                                        {product && (
                                                            <div
                                                                className="img-magnifier-container"
                                                                onMouseEnter={() => setShowMagnifier(true)}
                                                                onMouseLeave={() => setShowMagnifier(false)}
                                                                onMouseMove={handleMouseHover}
                                                            >
                                                                <div className="magnifier-img-container">
                                                                    <img className="magnifier-img" src={`${originals[photoIndex]}`} alt="" />

                                                                    {showMagnifier && (
                                                                        <div
                                                                            style={{
                                                                                position: "absolute",
                                                                                left: `${cursorPosition.x - 100}px`,
                                                                                top: `${cursorPosition.y - 100}px`,
                                                                                pointerEvents: "none",
                                                                            }}
                                                                        >
                                                                            <div
                                                                                className="magnifier-image"
                                                                                style={{
                                                                                    backgroundImage: `url(${originals[photoIndex]})`,
                                                                                    backgroundPosition: `${position.x}% ${position.y}%`,
                                                                                }}
                                                                            />

                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </li>
                                                </ul>
                                            </div>

                                            <p className="gallery-text text-center">Roll over image to zoom in</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-section">
                                    <div className="product-buttons">
                                        <div className="btn-box share-btn">
                                            <a>
                                                <img src="https://www.supergeneral.com/public/images/products/btn/share.png" className="img-fluid btn-black lazyload" alt="share" />
                                                <img src="https://www.supergeneral.com/public/images/products/btn/share-w.png" className="img-fluid btn-white lazyload" alt="share" />
                                                share
                                            </a>
                                            <a rel="nofollow" href='https://www.facebook.com/profile.php?id=61554996632615&mibextid=9R9pXO' className="fb_share share-social" target="_blank">
                                                <i className="fa fa-facebook" aria-hidden="true"></i>
                                            </a>
                                            <a rel="nofollow" className="mail_share share-social" href="mailto:Diakoolairconditioners@gmail.com">
                                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                            </a>
                                            <a rel="nofollow" href="https://wa.me/+971505735436?text=Hello%20there,%20I%20want%20to%20buy%20your%20product" className="whatsup_share share-social" target="_blank">
                                                <i className="fa fa-whatsapp" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                        <div className="btn-box">
                                            <a className="compare" data-slug="36000-btus-split-air-conditioners-eforce-series">
                                                <img src="https://www.supergeneral.com/public/images/products/btn/compare.png" className="img-fluid btn-black lazyload" alt="compare" />
                                                <img src="https://www.supergeneral.com/public/images/products/btn/compare-w.png" className="img-fluid btn-white lazyload" alt="compare" />
                                                Compare
                                            </a>
                                        </div>
                                        <div className="btn-box">
                                            <a className="download-p-img" href={`https://supercoolacimages.alphanitesofts.net/1703778092_Group%201.png`} onClick={handleDownloadImages} >
                                                <img src="https://www.supergeneral.com/public/images/products/btn/download.png" className="img-fluid btn-black lazyload" alt="download" />
                                                <img src="https://www.supergeneral.com/public/images/products/btn/download-w.png" className="img-fluid btn-white lazyload" alt="download" />
                                                Image
                                            </a>

                                        </div>
                                        <div className="btn-box">
                                            <a id="print-btn" data-val="SGS372HE" data-pagetitle="36000 BTUs Split Air Conditioners – eForce Series" onClick={handlePrint}>
                                                <img src="https://www.supergeneral.com/public/images/products/btn/print.png" className="img-fluid btn-black lazyload" alt="print" />
                                                <img src="https://www.supergeneral.com/public/images/products/btn/print-w.png" className="img-fluid btn-white lazyload" alt="print" />
                                                Print
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5 col-md-4 col-12 p-0">
                                {product &&
                                    <div className="product-descrptions">
                                        <div className="product-name" id='printablediv'>
                                            <h2 className="product-code">SGS372HE</h2>
                                            <h1>{product?.name}</h1>
                                        </div>
                                        <div className="key-feature-des">
                                            <h3>Key Features</h3>
                                            <ul>
                                                {key_features?.map((item, index) => (
                                                    <li>{item.name}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="d-block">
                                            <div className="btn-amazon">
                                                <a href="https://wa.me/+971505735436?text=Hello%20there,%20I%20want%20to%20buy%20your%20product" target="_blank">
                                                    <h6>Buy now on</h6>
                                                    <img src="/images/whatsapp.png" className="img-fluid lazyload" alt="buy on whatsapp" />
                                                    <strong >WhatsApp</strong>
                                                    <i className="fa fa-angle-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="d-none">
                                            <div className="btn-where">
                                                <a href="#"> Where To Buy</a>
                                            </div>
                                        </div>
                                        <p className="conditions">Product features & specifications are country specific & Super General Company reserves the right to make any change without prior notice.Some models may not be available in your country.</p>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </section >
            }

            {product !== "" &&
                <Specification specification={specification} key_features={key_features} />
            }
            <div style={{ display: "none" }}>{<ProductInvoice key_features={key_features}
                specification={specification} product={product} ref={componentRef} />}</div>
<ImageSection/>
        </>
    )
}

export default ProductDetails