import { useState } from 'react';
import './Cart.css';

const Cart = (props) => {
     const { cart } = props;
     let [products, setProducts] = useState([]);
    let total = '';
    for(const product of cart){
     total = total+("  ") + product.name;
    }
    const remove = (product) =>{
      products = [];
      const newCart = [...cart, product];
        setProducts(newCart);
      // setProducts(products);
    }

    const Random = () =>{
        const random = Math.floor(Math.random() * cart.length);
        setProducts(random, cart[random]);
      }

    return (
        <div>
        <div className='cart-history'>
            <h3 >Order Summary</h3>
            <p>Selected items: {cart.length}</p>
            <h3> {total}</h3>
        </div>
          <div>
           <button onClick={Random} className='chose'>Choose One</button>
            <br />
            <p>{setProducts}</p>
            <button onClick={remove} className='remove'>Removeall</button>
            </div>
        </div>

    );
};

export default Cart;