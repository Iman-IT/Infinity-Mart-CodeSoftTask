import React from 'react'
import { useNavigate} from 'react-router-dom';
import data from '../data.json'
import './GlobalStyles.css'

function AddToCart ({amount,id})
{
  const product = data.find(item => item.id === id);

  if (!product) {
    return <div>Details not found</div>;
  }
  const history=useNavigate()
    const handleAddToCart = () =>
    {
        // const product = data; //assuming first data
      const cartItem = {
        id: product.id,
        title: product.title,
        image: product.image,
        amount: amount,
        total: product.price * amount,
        price: product.price,
        stock:product.stock
  
      };
      // Saving the product data in localStorage
      let productData = JSON.parse(localStorage.getItem('Product')) || [];
      productData.push(cartItem);
      localStorage.setItem('Product', JSON.stringify(productData));
  
      // Navigating to the cart page
      history( '/cart' );
      console.log( cartItem );
      console.log(Error)
    };

    return (
      
    <button className='btn ' onClick={handleAddToCart} style={{backgroundColor:'darkorange',color:'white'}}>
    Add to Cart
  </button>
  )
}

export default AddToCart