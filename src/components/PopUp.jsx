import { nanoid } from "nanoid";
import React, { useState } from "react";
import PopUpContestant from "./PopUpContestant";

const PopUp = (props) => {
  const {
    updateTournamentData,
    isUpper,
    round,
    date,
    FPscore,
    FPname,
    SPscore,
    SPname,
    id,
    togglePopUp,
  } = props;

  // const context = useContext(TournamentDataContext);
  // console.log(context);

  const [formData, setFormData] = useState({
    FPscore: FPscore,
    SPscore: SPscore,
    date: date,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTournamentData(
      isUpper,
      round,
      id,
      formData.FPscore,
      formData.SPscore,
      formData.date
    );
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  return (
    <>
      <div className="popup-container">
        <form className="popup-box">
          <div className="popup-close" onClick={togglePopUp}>
            &times;{" "}
          </div>
          <div className="popup-game">
            <PopUpContestant
              key={nanoid()}
              score={formData.FPscore}
              name={FPname}
              handleChange={handleChange}
              id={"FPscore"}
            />
            <PopUpContestant
              key={nanoid()}
              score={formData.SPscore}
              name={SPname}
              handleChange={handleChange}
              id={"SPscore"}
            />
          </div>
          <input
            className="popup-date"
            id="date"
            value={formData.date}
            name="date"
            onChange={handleChange}
            spellCheck="false"
            autoComplete="off"
            placeholder="Set Date"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="popup-submit-btn"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default PopUp;
