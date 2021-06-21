import React, { useState } from "react";
import { AiFillGithub, AiFillHeart } from "react-icons/ai";
import { SiRedux } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import Footer from "./components/Footer";
import Image from "./components/Image";
import Modal from "./components/Modal";
import classes from "./App.module.css";
import alphabetsPaths from "./fixtures/alphabetsPaths";

function App() {
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  const imageHandler = (info) => {
    if (modalInfo.id_ === info.id_) {
      setModalInfo({});
      setModal(false);
    } else {
      setModalInfo(info);
      setModal(true);
    }
  };

  return (
    <>
      <div className={classes.Flash}></div>
      <div className={classes.Container}>
        <header>
          <div>
            <span className={classes.Heading}>daxUI 🤟</span>v 0.1.0
          </div>
          <p className={classes.Tagline}>
            A 3D Isometric component library for your custom projects
          </p>
        </header>
        <div className={classes.Data}>
          <h1 className={classes.SectionHeading}>Alphabets</h1>
          <div
            className={`${classes.Gallery} ${
              modal ? classes.ModalOn : classes.ModalOff
            }`}
          >
            <div className={classes.Images}>
              {alphabetsPaths.map((item) => {
                return (
                  <Image
                    key={item.id_}
                    source={item.image}
                    alterText={item.alt}
                    onImageClick={() => imageHandler(item)}
                  />
                );
              })}
            </div>
            {modal && <Modal>{modalInfo}</Modal>}
          </div>
          <p style={{ margin: "0px 0px 10px 0px" }}>
            <span className={classes.ComingSoon}>
              🪄 more magic coming soon...
            </span>
            <br />
            <br />
            <a
              href="https://www.github.com/daxter-army/daxUI"
              target="_blank"
              rel="noreferrer"
              style={{ color: "white" }}
            >
              Source code on Github <AiFillGithub />
            </a>
          </p>
        </div>
      </div>
      <Footer>
        Made with <FaReact />, <SiRedux /> and <AiFillHeart /> by Mehul Singh
        Teya
      </Footer>
    </>
  );
}

export default App;
