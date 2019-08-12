import React from 'react';

import './style.scss';

const CheckoutItem = ({cartItem: {name, imageUrl, price, quantity}}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span name="name">{name}</span>
      <span name="quantity">{quantity}</span>
      <span name="price">{price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  )
}

export default CheckoutItem;