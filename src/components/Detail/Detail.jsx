/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Detail = ({ color, alignment, className, typographyContentClassName, text = "Texto detail" }) => {
  return (
    <div className={`detail ${className}`}>
      <div className={`typography-content ${color} ${alignment} ${typographyContentClassName}`}>{text}</div>
    </div>
  );
};

Detail.propTypes = {
  color: PropTypes.oneOf(["inverse", "standard"]),
  alignment: PropTypes.oneOf(["center", "right", "left"]),
  text: PropTypes.string,
};
