import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';


import './style.css';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cartSelectors';
import CheckoutItem from '../../components/CheckoutItem';

const CheckoutPage = ({cartItems, cartTotal}) => {
  console.log(cartItems);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span></span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(cartItem => 
          <CheckoutItem cartItem={cartItem} key={cartItem.id} />
        )
      }
      <div className="total">
        <span>TOTAL: ${cartTotal}</span>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);