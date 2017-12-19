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
      <p>Current Price : {props.price}</p>
      {arrayControls}
    </div>
  );
};

export default buildControls;
