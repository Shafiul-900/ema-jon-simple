import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    // const {cart} = props;
    // console.log(cart)
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        if(product.quantity === 0){
            product.quantity = 1;
        }
        // product.quantity = product.quantity || 1;
        // console.log(product);
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    
    const tex = totalPrice * 7;
    const totalTex = tex / 100;

    const grandTotal = totalPrice + totalShipping + totalTex;
    
    return (
        <div className='cart'>
            <h3 className='order-summary-title'>Order Summary</h3>
            
            <p>Selected Items: {quantity}</p>
            <p>Total Price: $ {totalPrice}</p>
            <p>Shipping Charge: $ {totalShipping}</p>
            <p>Tex: ${totalTex.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
            <button>Clear Cart</button>
            <button>Review Order</button>
        </div>
    );
};

export default Cart;