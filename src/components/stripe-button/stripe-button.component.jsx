import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JkRqbHi1DpqwdjZ5gnwRpecKOxt5REkBiUBFjf1lVlSLCTth7ALJcitKYOUNGD35pRE3TueUPg5txEn5XZ4NbPQ00gs9sLQpb';

    const onToken = token => {
        console.log(token)
        alert('Payment Successful');
    }

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