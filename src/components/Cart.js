import React, { useState, useEffect } from 'react';

function Cart({ items }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (items) {
      setCartItems(items);
    }
  }, [items]);

  const handleCheckout = () => {
    setCartItems([]);
    alert("Thank you for your purchase!");
  }

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? <p>Your cart is empty</p> : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      )}
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default Cart;
