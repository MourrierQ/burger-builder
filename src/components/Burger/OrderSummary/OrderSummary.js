import React from "react";

import Aux from "../../../hoc/Aux";

const style = {
  textTransform: "capitalize"
};

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={style}>{igKey}</span> : {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      {ingredientSummary}
      <p>
        Total Price : <strong>{props.price.toFixed(2)}€</strong>
      </p>
      <p>Continue to checkout ? </p>
    </Aux>
  );
};

export default orderSummary;
