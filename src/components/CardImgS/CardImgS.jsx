/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Detail } from "../Detail";
import { Heading } from "../Heading";
import "./style.css";

export const CardImgS = ({
  tagAlternative = false,
  level2 = true,
  tag = false,
  type,
  className,
  headerClassName,
  detailTypographyContentClassName,
  headingText = "Lorem ipsum dolor sit amet consecte tur adipiscing elit.",
}) => {
  return (
    <div className={`card-img-s ${type} ${className}`}>
      <div className={`header ${headerClassName}`} />
      <div className="text">
        {type === "alternative" && (
          <Detail
            alignment="left"
            className="instance-node"
            color="standard"
            text="LOREM IPSUM"
            typographyContentClassName={detailTypographyContentClassName}
          />
        )}

        <Heading
          alignment="left"
          className="instance-node"
          color="standard"
          text={type === "main" ? "Lorem Ipsum" : headingText}
        />
        {type === "main" && (
          <>
            <>
              {level2 && (
                <Detail
                  alignment="left"
                  className="instance-node"
                  color="standard"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
              )}
            </>
          </>
        )}
      </div>
    </div>
  );
};

CardImgS.propTypes = {
  tagAlternative: PropTypes.bool,
  level2: PropTypes.bool,
  tag: PropTypes.bool,
  type: PropTypes.oneOf(["alternative", "main"]),
  headingText: PropTypes.string,
};
