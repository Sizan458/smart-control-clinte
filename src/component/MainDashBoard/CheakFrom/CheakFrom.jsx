import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const CheakFrom = () => {
    const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      console.error(error);
    } else {
      // Send the token to your server for payment processing
      console.log(token);
    }
  };
    return (
        <div>
            <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
        </div>
    );
};

export default CheakFrom;