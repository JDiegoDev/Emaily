import React from "react";
import StripeCheckout from "react-stripe-checkout";
import * as actions from "../actions";
import { useDispatch } from "react-redux";

const Payments = () => {
  const dispatch = useDispatch();

  return (
    <StripeCheckout
      name="Emaily"
      description="$5 for 5 email credits"
      amount={500} // 5 dolars --> in cents
      token={(token) => dispatch(actions.handleToken(token))}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <button className="btn">Add Credits</button>
    </StripeCheckout>
  );
};

export default Payments;
