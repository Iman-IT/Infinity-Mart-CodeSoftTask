import React from 'react'
import data from '../data.json'
import { NavLink } from 'react-router-dom'
import AddToCart from '../components/AddToCart'
<link rel="stylesheet" href="GlobalStyles.css" />

function Products({}) {
  return (
      <div className='container mt-5' >
          <div className="row mx-auto d-flex justify-content-center align-items-center">
             
                      {
                          data.map( ( pro, index ) =>
                          (
                     <div className="col-12 col-md-3 col-sm-3" data-aos="fade-down-right" key={index}>
                              <div className="card px-3 py-2 mt-2" >  
                                <div className="card-img">
                                <img src={pro.image} alt="" className='img-fluid' /> 
                              </div>
                                 
                                  <h4>{pro.title}</h4>
                                  Price : {pro.price}
                                <div className="d-flex text-center justify-content-center align-items-center">
                               
                                  <NavLink className={'btn btn-primary me-3'} to={`/detail/${ pro.id
                                    }`}>Details</NavLink>
                           
                                  <AddToCart id={pro.id} amount={1} />
                                  </div>
                                   
                                  </div>
                                  </div>
                          ) )
                      
                      }       
              </div>    
    </div>
  )
}

export default Products