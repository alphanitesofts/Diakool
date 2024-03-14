import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './components/Home';
import Doctors from './components/Doctors';
import Department from './components/Department';
import Contact from './components/Contact';
import About from './components/About';
import Client from './components/Client';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Specialities from './components/Services';
import Blogs from './components/Blogs';
import BlogDetails from './components/BlogDetails';
import ServiceDetails from './components/ServiceDetails';
import ProductListing from './components/Products/ProductListing';
import ProductDetails from './components/Products/ProductDetails';
import SearchProduct from './components/Products/SearchProduct';

//new one

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/doctors" element={<Doctors/>} />
        <Route path="/departments" element={<Department/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/client" element={<Client/>} />
        <Route path="/specialities" element={<Specialities/>} />
        <Route path="/blogs" element={<Blogs/>} />     
        <Route path="/servicedetails" element={<ServiceDetails/>} />     

        <Route path="/blogsdetails/:id" element={<BlogDetails/>} />
        <Route path="/productlisting" element={<ProductListing/>} />
        <Route path="/productdetails/:productId" element={<ProductDetails/>} />
        <Route path="/searchProduct/:query" element={<SearchProduct/>} />



      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
