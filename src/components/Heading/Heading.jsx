/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Heading = ({ color, alignment, className, text = "Título h4" }) => {
  return (
    <div className={`heading color-${color} alignment-${alignment} ${className}`}>
      <div className="text-wrapper">{text}</div>
    </div>
  );
};

Heading.propTypes = {
  color: PropTypes.oneOf(["inverse", "standard"]),
  alignment: PropTypes.oneOf(["center", "right", "left"]),
  text: PropTypes.string,
};
