import React from 'react'

function Contact() {
  return (
      <div className='container-fluid mt-5 pb-3' id='contactus'>
          <div className="row mx-auto justify-content-center align-items-center">
              <div className="col-12 col-md-5  pt-2">
                  <form action="" style={{}} className='card shadow bg-light px-3 py-3'>
                    <h3 className='text-center'>Contact Form</h3>
                      <div className="d-flex px-2">
                        
                          <input type="text" name="name" placeholder="Enter Your Name" required className='form-control' />
                      <input type="email" name="email" className='form-control ms-2' placeholder="Enter Your Email" required />
                 </div>
                      <textarea name="" id="" cols="30" rows="5" className='form-control mt-4' placeholder='Enter Your Message here'></textarea>
                      <div className="text-center">
                      <button type="submit" className="btn btn-lg btn-warning mt-4  ">Send</button>
             </div>
                          
                                    
              </form>
              </div>
             
            
          </div>
    </div>
  )
}

export default Contact