import React from "react";
import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <motion.div
      className={classes.Modal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <p className={classes.Heading}>{props.children.alt}</p>
      <img
        className={classes.Logo}
        src={props.children.image}
        alt={props.children.alt}
      />
      <br />
      <br />
      <br />
      <div className={classes.actions}>
        <div>
          <p>
            <b>Format:</b> .svg
          </p>
        </div>
        <div>
          <button className={classes.DownloadBtn}>
            <a
              href={props.children.image}
              download={`${props.children.alt}.svg`}
              style={{ color: "white" }}
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
