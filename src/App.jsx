import './App.css';
import React from 'react';
import Nav from './Components/Nav.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Search from './Components/Search.jsx';
import Footer from './Components/Footer.jsx';
import Products from './Components/Products.jsx';
import Contact from './Components/Contact.jsx';
import Element from './Components/Element.jsx';
import Learning from './Components/Learning.jsx';
import Info from './Components/Info.jsx';
import Testimonial from './Components/Testimonial.jsx';


function App() {


  return (
    <>
      <div>
        <BrowserRouter>
          <Nav/>

          <Routes>
            <Route path="*" element={<Search/>}/>
            <Route path="/Home" element={<Search/>}/>
            <Route path="/Products" element={<Products/>}/>
            <Route path="/Testimonial" element={<Testimonial/>}/>
            <Route path="/Info" element={<Info/>}/>
            <Route path="/Learning" element={<Learning/>}/>
            <Route path="/Element" element={<Element/>}/>
            <Route path="/Contact" element={<Contact/>}/>
        


          </Routes>

          <Footer/>
        </BrowserRouter>
      </div>
      
    </>
  )
}

export default App
