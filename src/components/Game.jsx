import React, { useState } from "react";
import { nanoid } from "nanoid";

import PopUp from "./PopUp";

const Game = (props) => {
  const [popUp, setPopUp] = useState(false);

  const { date, FPscore, FPname, SPscore, SPname, token } = props;

  function styleFPscore(FPscore, SPscore) {
    return FPscore < SPscore
      ? { color: "rgba(0, 103, 120, 0.5)", fontWeight: 500 }
      : {};
  }

  function styleSPscore(FPscore, SPscore) {
    return FPscore > SPscore
      ? { color: "rgba(0, 103, 120, 0.5)", fontWeight: 500 }
      : {};
  }

  const togglePopUp = () => {
    setPopUp(!popUp);
  };

  const cursorPopUpStyle = popUp
    ? { cursor: "default" }
    : { cursor: "pointer" };

  return (
    <>
      <span className="date">{date}</span>
      <div
        className="game"
        onClick={popUp ? null : togglePopUp}
        style={cursorPopUpStyle}
      >
        <div
          className="contestant first-contestant"
          style={styleFPscore(FPscore, SPscore)}
        >
          <span className="contestant-name">&nbsp;{FPname}</span>
          <span className="contestant-score">{FPscore}</span>
        </div>
        <div className="contestant" style={styleSPscore(FPscore, SPscore)}>
          <span className="contestant-name">&nbsp;{SPname}</span>
          <span className="contestant-score">{SPscore}</span>
        </div>
      </div>
      {popUp && token ? (
        <PopUp key={nanoid()} {...props} togglePopUp={togglePopUp} />
      ) : null}
    </>
  );
};

export default Game;
