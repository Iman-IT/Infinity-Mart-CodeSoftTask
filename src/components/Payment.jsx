import React from 'react'

function Payment ( { totalPayment } )
{
    const order = () =>
    {
        //if(input.field.filled)
        alert('Your order is on the way')
    }
  return (
      
          <div className="row mx-auto px-4">
              {/* Order */}
          <div className="col-12 col-md-6">
                  <div className="card px-3 py-3">
                      <div className="d-flex py-2">
                          <label htmlFor="name" className="form-lable pe-3">Name</label>
                          <input type="text" name="" id="" className='form-control' placeholder='Order placed on name'/>
                      </div>
                    
                      <div className="d-flex py-2">
                          <label htmlFor="email" className="form-lable pe-3">Email</label>
                            <input type="email" name="email" className='form-control' id="" placeholder='Enter email' />
                      </div>

                      <div className="d-flex py-2">
                          <label htmlFor="phone" className="form-lable pe-2">Mobile</label>
                          <input type="tel" name="phone" className='form-control'placeholder='Phone Number' id="" />
                  </div>
                  
                  <div className="d-flex py-2">
                          <label htmlFor="payment" className="form-lable pe-1">Payment</label>
                          <select name="payment" id="" className='form-select'>
                  <option value="">Cash On Delivery</option>
              </select>
                      </div>    
          </div>
          </div>
              {/* Total Payment */}
          
              <div className="card pt-3 mt-3 col-12 col-md-4 text-end ms-5">
                <div className="d-flex">
                  <p className="fw-bold pe-3">Payment: </p>
                  <p>{totalPayment}</p>
                </div>
                <div className="d-flex">
                  <p className="fw-bold pe-3">ShippingFee: </p>
                  <p>200</p>
                </div>
                <div className='d-flex'>
                  <p className="fw-bold pe-2">Total:</p>
                  <p>{totalPayment + 200 + ' Rs'}</p>
                      </div>
                           </div>
      
          <div className="d-flex text-center justify-content-center align-items-center">
                <button className='btn btn-warning btn-lg mt-3' onClick={order}>Order</button>
              </div>
    </div>
  )
}

export default Payment