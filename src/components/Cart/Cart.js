import './Cart.css';

const Cart = (props) => {
     const { cart } = props;
    let total = '';
    for(const product of cart){
     total = total+("  ") + product.name + (" ");
    }
    // if(cart.length>4){
    //     alert("You already slect four items");
    // }
    const clear = () =>{
      console.log (delete total[total.length]);
    }

    const getRandomInt = () =>{
        const random = Math.floor(Math.random() * cart.length);
        console.log(random, cart[random]);
      }

    return (
        <div>
        <div className='cart-history'>
            <h3 >Order Summary</h3>
            <p>Selected items: {cart.length}</p>
            <h3> {total}</h3>
        </div>
          <div className='btn-crt'>
           <button onClick={getRandomInt}>Choose One for me</button>
            <br />
            <button onClick={clear}>Clear Items</button>
            </div>
        </div>

    );
};

export default Cart;