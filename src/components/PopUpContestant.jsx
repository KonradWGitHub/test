const PopUpContestant = (props) => {
  const { score, name, handleChange, id } = props;
  return (
    <div className="popup-contestant">
      <span className="popup-contestant-name">{name ? name : "TBD"}</span>
      <input
        className="popup-contestant-score"
        id={id}
        value={score}
        onChange={handleChange}
        spellCheck="false"
        placeholder={score}
        autoComplete="off"
      />
    </div>
  );
};

export default PopUpContestant;
