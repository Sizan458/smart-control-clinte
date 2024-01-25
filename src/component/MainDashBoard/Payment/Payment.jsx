import { loadStripe } from '@stripe/stripe-js';

import { Elements } from '@stripe/react-stripe-js';
import CheakFrom from '../CheakFrom/CheakFrom';

const Payment = () => {
    const stripePromise = loadStripe('pk_test_51OboIMI5AmyQ80w24KyVqOEjaFVmR285C7L6TCwyL9cdQLyLFKRcft2XpRXduXWQSnEkbrNByvvrGemtvlG8FSH200gNaNFdMA');
    return (
        <div>
            <h1>kkk</h1>
            <Elements stripe={stripePromise}>
        <CheakFrom/>
      </Elements>
        </div>
    );
};

export default Payment;