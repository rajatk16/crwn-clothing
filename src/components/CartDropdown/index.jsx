import React from 'react';
import {connect} from 'react-redux';

import './style.css';
import CustomButton from '../CustomButton';
import CartItem from '../CartItem';

const CartDropdown = ({cartItems}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.map(cartItem => {
            return (
              <CartItem key={cartItem.id} item={cartItem} />
            )
          })
        }
      </div>
      <CustomButton>CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems
})

export default connect(mapStateToProps)(CartDropdown);