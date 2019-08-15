import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';


import './style.css';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cartSelectors';
import CheckoutItem from '../../components/CheckoutItem';
import StripeButton from '../../components/StripeButton';

const CheckoutPage = ({cartItems, cartTotal}) => {
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
      <div className="test-warning">
        *Please use the following credit card for payments*
        <br/>
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <StripeButton price={cartTotal} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);