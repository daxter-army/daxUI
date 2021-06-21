import React from "react";

import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer className={classes.Footer} style={{ color: props.clr }}>
      <b>{props.children}</b>
    </footer>
  );
};

export default Footer;
