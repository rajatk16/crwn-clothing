import React from 'react';
import {connect} from 'react-redux';

import './style.css';
import {clearItemFromCart, removeItem, addItem} from '../../redux/cart/cartActions'

const CheckoutItem = ({cartItem, clearItemFromCart, addItem, removeItem}) => {
  const {name, imageUrl, price, quantity} = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span name="name">{name}</span>
      <span name="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>
      <span name="price">{price}</span>
      <div className="remove-button" onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);