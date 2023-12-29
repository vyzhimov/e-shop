import React from "react";
import "./Loader.styles.css";
import Glasses from "../../assets/images/glasses.png";

const Loader = () => {
  return (
    <>
      <div className="text-loader relative flex flex-col items-center gap-1 font-logo">
        <span className="letter opacity-25">
          <img
            src={Glasses}
            alt="glassess"
            width="150px"
            className="opacity-50"
          />
        </span>
        <div className="text-container">
          <span className="letter text-[--accent-color]">E</span>
          <span className="letter">y</span>
          <span className="letter">e</span>
          <span className="letter">w</span>
          <span className="letter">e</span>
          <span className="letter">a</span>
          <span className="letter">r</span>
          <span>&nbsp;&nbsp;</span>
          <span className="letter">F</span>
          <span className="letter">o</span>
          <span className="letter">r</span>
          <span>&nbsp;&nbsp;</span>
          <span className="letter text-[--accent-color]">E</span>
          <span className="letter">v</span>
          <span className="letter">e</span>
          <span className="letter">r</span>
          <span className="letter">y</span>
          <span className="letter">o</span>
          <span className="letter">n</span>
          <span className="letter">e</span>
        </div>
      </div>
    </>
  );
};

export default Loader;
