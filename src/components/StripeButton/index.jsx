import React from 'react';
import StripeCheckout from "react-stripe-checkout";

import './style.css';

const StripeButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_ya6k5T0kEf5kjoUshyhjB3Yf00U3KH1cEh'

  const onToken = token => {
    alert('Payment Successful!')
  }
  return (
    <StripeCheckout 
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAdress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeButton;

