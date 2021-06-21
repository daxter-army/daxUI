import React from "react";
import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";
import classes from "./Modal.module.css";

const Modal = (props) => {
  console.log(props.theme);
  return (
    <motion.div
      className={classes.Modal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <p className={classes.Heading} style={{ color: props.theme }}>
        {props.children.alt}
      </p>
      <img
        className={classes.Logo}
        src={props.children.image}
        alt={props.children.alt}
      />
      <br />
      <br />
      <br />
      <div className={classes.actions} style={{ color: props.theme }}>
        <div>
          <p>
            <b>Format:</b> .svg
          </p>
        </div>
        <div>
          <button
            className={classes.DownloadBtn}
            style={{ border: `1px ${props.theme} solid` }}
          >
            <a
              href={props.children.image}
              download={`${props.children.alt}.svg`}
              style={{ color: props.theme }}
            >
              <AiOutlineDownload />
            </a>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Modal;
