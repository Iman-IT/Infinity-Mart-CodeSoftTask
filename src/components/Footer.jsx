import React from 'react'
import '../components/GlobalStyles.css'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
      <div className='contianer  text-white' style={{backgroundColor:'black'}}>
          <div className="row mx-auto d-flex align-content-center align-items-center">
              <div className="col-12 col-md-4 pt-4">
                 
                  <h3><img src="cart.png" alt="logo" width={70} height={70} className='img-fluid logo mt-2' /></h3>
          <h4>Infinity Mart</h4>
                  <p className='text-white'>@{new Date().getFullYear()}. All Rights Reserved</p>
              </div>

              <div className="col-12 col-md-4 pt-4">
                  <h5 >Quick Links:</h5>
                  <NavLink to={'/'} className={'nav-item'}>Home</NavLink> <br />
                  <NavLink to={'/products'}>Products</NavLink><br />
                  <NavLink to={'/contactus'}>Contact Us</NavLink><br />

                  
              </div>
              <div className="col-12 col-md-4 pt-4">
                  <h5>Stay in Touch</h5> 
                  <img src="twit.png" width={50} height={50} alt="" />
                  <img src="fb.png" width={50} height={50} alt="" />

                  </div>

          </div>
    </div>
  )
}

export default Footer