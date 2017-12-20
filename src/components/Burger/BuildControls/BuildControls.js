import React from "react";

import BuildControl from "./BuildControl/BuildControl";

import classes from "./BuildControls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const buildControls = props => {
  const arrayControls = controls.map(control => (
    <BuildControl
      added={() => props.ingredientAdded(control.type)}
      removed={() => props.ingredientRemoved(control.type)}
      key={control.label}
      label={control.label}
      disabled={props.disabled[control.type]}
    />
  ));

  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price : <strong>{props.price.toFixed(2)}</strong>
      </p>
      {arrayControls}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
