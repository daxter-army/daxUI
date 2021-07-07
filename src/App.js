// REACT
import React, { useState } from "react";

// REACT-ICONS
import { AiFillGithub, AiFillHeart } from "react-icons/ai";
import { FiMoon, FiSun } from "react-icons/fi";
import { FaReact } from "react-icons/fa";

// COMPONENTS
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Section from "./components/Section";

// FIXTURES
import alphabetsPaths from "./fixtures/alphabetsPaths";
import digitsPaths from "./fixtures/numbersPaths";
import specialCharsPaths from "./fixtures/specialCharsPaths";

// CSS
import classes from "./App.module.css";

function App() {
  // STATE VARS
  const [theme, setTheme] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  // THEME MODE TOGGLER
  if (theme) {
    document.body.classList.remove("DarkMode");
    document.body.classList.add("WhiteMode");
  } else {
    document.body.classList.remove("WhiteMode");
    document.body.classList.add("DarkMode");
  }

  const imageHandler = (info) => {
    if (modalInfo.id_ === info.id_) {
      setModalInfo({});
      setModal(false);
    } else {
      setModalInfo(info);
      setModal(true);
    }
  };

  // THEME MODE TOGGLER FUNCTION
  const themeHandler = () => {
    theme ? setTheme(false) : setTheme(true);
  };

  return (
    <>
      <div className={classes.Flash}></div>
      <div className={classes.Container}>
        {/* HEADER STARTS */}
        <header>
          <div className={theme ? classes.Dark : classes.White}>
            <button
              className={`${classes.themeBtn} ${
                theme ? classes.Dark : classes.White
              }`}
              onClick={themeHandler}
            >
              {theme ? <FiMoon /> : <FiSun />}
            </button>
            <span className={classes.Heading}>daxUI 🤟</span>v 0.1.0
          </div>
          <p
            className={`${classes.Tagline} ${
              theme ? classes.Dark : classes.White
            }`}
          >
            A 3D Isometric component library for your custom projects
          </p>
        </header>
        {/* HEADER ENDS */}
        {/* CONTENT STARTS */}
        <div className={classes.Data}>
          <div
            className={`${classes.Gallery} ${
              modal ? classes.ModalOn : classes.ModalOff
            }`}
          >
            <div className={classes.Images}>
              <Section
                heading="Alphabets"
                color={theme ? "black" : "white"}
                imageClicker={imageHandler}
              >
                {alphabetsPaths}
              </Section>
              <Section
                heading="Numbers"
                color={theme ? "black" : "white"}
                imageClicker={imageHandler}
              >
                {digitsPaths}
              </Section>
              <Section
                heading="Special Characters"
                color={theme ? "black" : "white"}
                imageClicker={imageHandler}
              >
                {specialCharsPaths}
              </Section>
            </div>
            {modal && (
              <Modal theme={theme ? "black" : "white"}>{modalInfo}</Modal>
            )}
          </div>
          <p style={{ margin: "20px 0px 10px 0px" }}>
            <span
              className={`${classes.ComingSoon} ${
                theme ? classes.Dark : classes.White
              }`}
            >
              ✨ more magic coming soon...
            </span>
            <br />
            <br />
            <a
              href="https://www.github.com/daxter-army/daxUI"
              target="_blank"
              rel="noreferrer"
              style={theme ? { color: "black" } : { color: "white" }}
            >
              Source code on Github <AiFillGithub />
            </a>
          </p>
        </div>
      </div>
      <Footer clr={theme ? "black" : "white"}>
        Made with <FaReact /> and <AiFillHeart /> by Mehul Singh Teya
      </Footer>
    </>
  );
}

export default App;
