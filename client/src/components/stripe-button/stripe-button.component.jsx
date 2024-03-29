import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JkRqbHi1DpqwdjZ5gnwRpecKOxt5REkBiUBFjf1lVlSLCTth7ALJcitKYOUNGD35pRE3TueUPg5txEn5XZ4NbPQ00gs9sLQpb';

    const onToken = token => {
        axios({
          url: 'payment',
          method: 'post',
          data: {
            amount: priceForStripe,
            token
          }
        }).then(response => {
          alert('Payment Successful')
        }).catch(error => {
          console.log('payment Error: ', JSON.parse(error));
          alert('There was an issue with your payment. Please make sure you use the provided credit card')
        });
    };

    return (
      <StripeCheckout
        label = 'Pay Now'
        name = 'CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image = 'http://svgshare.com/i/CUz.svg'
        description = {`Your total is $${ price }`}
        amount = { priceForStripe }
        panelLabel = 'Pay Now'
        token = { onToken }
        stripeKey= { publishableKey }
      />
    );
};

export default StripeCheckoutButton;