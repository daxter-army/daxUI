import React from "react";

import classes from "./Image.module.css";

function Image({ source, alterText, onImageClick }) {
  return (
    <img
      className={classes.Image}
      src={source}
      alt={alterText}
      onClick={onImageClick}
    />
  );
}

export default Image;
