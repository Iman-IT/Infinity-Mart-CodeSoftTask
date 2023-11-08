import React, { useEffect, useState } from 'react';
import CardAmountToogle from '../components/CardAmountToogle';
import Payment from '../components/Payment';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('Product')) || [];
    setCartItems(savedCartItems);
  }, []);

  let deleteProduct = (index) => {
    let tempList = [...cartItems];
    tempList.splice(index, 1);
    setCartItems(tempList);
    localStorage.setItem("Product", JSON.stringify(tempList));
  }

  const totalPayment = cartItems.reduce((total, item) => total + item.total, 0);

  const handleIncrement = (index) => {
    let tempList = [ ...cartItems ];
    tempList[index].amount = parseInt(tempList[index].amount);
tempList[index].price = parseFloat(tempList[index].price);

    if ( tempList[ index ].amount < tempList[ index ].stock )
    {
      tempList[ index ].amount += 1;
    
      if ( !isNaN( tempList[ index ].amount ) && !isNaN( tempList[ index ].price ) )
      {
        tempList[ index ].total = tempList[ index ].amount * tempList[ index ].price;
        localStorage.setItem( "Product", JSON.stringify( tempList ) );
        setCartItems( tempList );
      }
    }
    else
      alert('Out Of Stock')

};

const handleDecrement = (index) => {
  let tempList = [ ...cartItems ];
  tempList[index].amount = parseInt(tempList[index].amount);
tempList[index].price = parseFloat(tempList[index].price);

  if (tempList[index].amount > 1) {
    tempList[index].amount -= 1;
    if ( !isNaN( tempList[ index ].amount ) && !isNaN( tempList[ index ].price ) )
    {
      tempList[ index ].total = tempList[ index ].amount * tempList[ index ].price;
      localStorage.setItem( "Product", JSON.stringify( tempList ) );
      setCartItems( tempList );
    }
  }
};

  const clear = () =>
  {
    const arr = []
    localStorage.setItem("Product",JSON.stringify(arr))
    setCartItems( arr )
    
  }
  let navigate=useNavigate()
  const continueShop=() =>
  {
    navigate('/products')
  }


  return (
    <section className="h-100" style={{ backgroundColor: '#eee' }}>
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-8 col-sm-4">
            <h3 className="mb-2 text-black text-center">Shopping Cart</h3>
            <div className="card rounded-3 mb-4 mt-3 px-4 py-4">
              <div className="table-responsive justify-content-center align-items-center">
                <tr className='pb-4 py-5 text-center'>
                  <td className='px-3 mx-2 h5'>Product</td>
                  <td className='px-3 mx-2 h5'>Name</td>
                  <td className='px-3 mx-2 h5'>Quantity</td>
                  <td className='px-5 h5'>Total</td>
                  <td className='px-3 h5'>Remove</td>
                </tr>
                {cartItems.map((item, index) => (
                  <tr className='mt-5 text-center' key={index}>
                    <td className='px-3 mx-3'>
                      <img src={item.image} className='img-fluid' width={100} height={100} alt="" />
                    </td>
                    <td className='px-2 mx-3'>{item.title}</td>
                    <td className='px-2'>
                      <CardAmountToogle
                        amount={item.amount}
                        increment={() => handleIncrement(index)}
                        decrement={() => handleDecrement(index)}
                      />
                    </td>
                    <td className='px-2 mx-3'>{item.total}</td>
                    <td>
             <button type='button' onClick={() => deleteProduct( index )} style={{ border: 'none' }}>
             <img src="del.png" className='img-fluid' width={30} height={30} alt="" />
               </button>
                    </td>
                  </tr>
                ) )}
             <div className="d-flex mb-3">
  <div className="me-auto">
    <button className='btn mt-3 btn-large text-white ms-2 me-5' style={{backgroundColor:'#B1A8E7'}} onClick={continueShop}>Continue Shopping</button>
  </div>
  <div>
    <button className=' btn btn-danger mt-3 me-3' onClick={clear}>Clear Cart</button>
  </div>
</div>


                <Payment totalPayment={ totalPayment} />
          
          </div>
        </div>
      </div>    </div>
            </div>
    </section>
  );
}

export default Cart;
