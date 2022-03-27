import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);



    const ClickHandel = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        ClickHandel={ClickHandel}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            <p> <strong>How React Work? <br /></strong>
                React is a javascript Library which use declarative code to create user interface. React makes the code in predictable and
                efficient way to build single page applications. To appear desirable output one the screen react component accept inputs which
                is arbitary and return the react element. The components are made of two bacic ingredient one is state and the other is props
                that promises one state data flow to ensure a hierarchical structure.The way react desined it can be used in server and node beside
                browser. <br />

                <strong>Props Vs State</strong> <br />
                Props passes data from one component to another component and state is a logal data storage that can not passes data to the
                other component  cause that is local to the component .State is a updateable structure on the other hand props is a read only
                component. Props are similer to the function argument it can be passed the same way as function argument is passed in a function.
                On the other hand the state can only be accessed or modified inside the component or by the component directly.props can be changed
                by parents component but state can not. props cann't change inside component but state can.

            </p>
        </div>
    );
};

export default Shop;