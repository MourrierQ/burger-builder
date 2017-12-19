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
      key={control.label}
      label={control.label}
      type={control.type}
    />
  ));

  return <div className={classes.BuildControls}>{arrayControls}</div>;
};

export default buildControls;
