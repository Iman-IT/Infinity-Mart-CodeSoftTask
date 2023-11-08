import React from 'react'

function CardAmountToogle({amount, increment,decrement}) {
  return (
      <div>
       <div className="d-flex">
                      <p><button className='btn fw-bold mx-3 ' onClick={decrement}>-</button>
                        {amount}
                          <button className='btn fw-bold mx-3' onClick={increment}>+</button></p>
                  </div>
      </div>
  )
}

export default CardAmountToogle