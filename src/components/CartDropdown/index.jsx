import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'

import './style.css';
import CustomButton from '../CustomButton';
import CartItem from '../CartItem';
import {selectCartItems} from '../../redux/cart/cartSelectors';
import {toggleCartHidden} from '../../redux/cart/cartActions';

const CartDropdown = ({cartItems, history, dispatch}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? 
          cartItems.map(cartItem => {
            return (
              <CartItem key={cartItem.id} item={cartItem} />
            )
          })
          : <span className="empty-message">Your cart is empty</span>
        }
      </div>
      <CustomButton 
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden())
        }}
      >
        CHECKOUT
      </CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));