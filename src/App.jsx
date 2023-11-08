import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import Detail from './Pages/Detail';
import data from './data.json'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './components/Footer';


function App() {

  return (
    <>
    
      <Navbar />
 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products' element={<Products data={data}  />} />
        <Route path='cart' element={<Cart/>} />
        <Route path='detail/:id' element={<Detail data={data}  />} />
        <Route path='about' element={<About />} />
        <Route path='contactus' element={<Contact/> } />
        </Routes>

    </>
  );
}

export default App;
