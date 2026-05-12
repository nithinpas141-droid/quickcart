import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/CartPage.css';

function CartPage() {
  const { cart, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <h1>Shopping Cart</h1>
        <div className="empty-cart-page">
          <p className="empty-message">🛒 Your cart is empty</p>
          <Link to="/" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      
      <div className="cart-page-content">
        <div className="cart-items-list">
          {cart.map(item => (
            <div key={item.id} className="cart-page-item">
              <img src={item.image} alt={item.name} className="cart-page-item-image" />
              
              <div className="cart-page-item-details">
                <h3 className="cart-page-item-name">{item.name}</h3>
                <p className="cart-page-item-category">{item.category}</p>
                <p className="cart-page-item-price">${item.price.toFixed(2)}</p>
              </div>
              
              <div className="cart-page-quantity">
                <button 
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="quantity-display">{item.quantity}</span>
                <button 
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              
              <div className="cart-page-item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              
              <button 
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
                aria-label="Remove item"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
        
        <div className="cart-summary">
          <h3>Order Summary</h3>
          
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>${getTotalPrice().toFixed(2)}</span>
          </div>
          
          <div className="summary-row">
            <span>Items:</span>
            <span>{cart.reduce((total, item) => total + item.quantity, 0)}</span>
          </div>
          
          <div className="summary-total">
            <span>Total:</span>
            <span>${getTotalPrice().toFixed(2)}</span>
          </div>
          
          <button className="checkout-btn">Proceed to Checkout</button>
          
          <Link to="/" className="continue-shopping-link">
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
