import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shops.css'

const Shops = () => {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const saveCart = [];
        for(const id in storedCart){
            const addedProduct = product.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;   
                saveCart.push(addedProduct);            
            }
        }
        setCart(saveCart)
    },[product])

    const handleAddToCart = (product) => {
       const newCart = [...cart, product]; 
       setCart(newCart);
       addToDb(product.id)
    }


    return (
        <div className='shop-container'>
           <div className='products-container'>
            {
                product.map(product => <Product
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                ></Product>)
            }
           </div>
           <div className='cart-container'>
                <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shops;<h1>This is shops pag</h1>