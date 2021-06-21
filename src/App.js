import React, { useState } from "react";
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
          <div className={classes.Heading}>daxUI 🤟</div>
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
          </p>
        </div>
      </div>
      <Footer>
        Made with ❤️ by{" "}
        <a
          href="https://www.github.com/daxter-army/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white" }}
        >
          Mehul Singh Teya
        </a>
      </Footer>
    </>
  );
}

export default App;