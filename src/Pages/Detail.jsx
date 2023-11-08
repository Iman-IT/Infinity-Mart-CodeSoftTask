import React, { useState } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import CardAmountToogle from '../components/CardAmountToogle';
import AddToCart from '../components/AddToCart';

function Detail({ data }) {
  const { id } = useParams(); // Assuming each product has a unique id
  const product = data.find(item => item.id === id);

  if (!product) {
    return <div>Details not found</div>;
  }

  const [amount, setAmount] = useState(1);
  const { stock } = product;


  const increment = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  const decrement = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };


  return (
    <div className='container mt-4'>
      <div className="row mx-auto justify-content-center align-items-center">
      <div className="col-12 col-md-4">
  <img src={'../'+product.image} className='img-fluid'  alt="" />
</div>


        <div className="col-12 col-md-6">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <h4>Price: {product.price}</h4>

          <CardAmountToogle amount={amount} increment={increment} decrement={decrement} />
        <AddToCart amount={amount} id={id} />
        </div>
      </div>
    </div>
  );
}

export default Detail;
