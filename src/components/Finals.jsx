import React, { Fragment } from "react";
import { nanoid } from "nanoid";
import Game from "./Game";

const Finals = (props) => {
  const { finals, isUpper, updateTournamentData, token } = props;

  const roundsBadge = (index) => {
    switch (index) {
      case 0:
        return null;
      case 1:
        return "Semifinals";
      case 2:
        return "Final";
      case 3:
        return "3rd place ";
    }
  };

  return (
    <div className="bracket">
      <h3 className="bracket-badge">Finals</h3>
      <div className={"finals-bracket"}>
        {finals.map((game, index) => (
          <Fragment key={nanoid()}>
            {index !== 0 && (
              <div className={`rounds r-${index}-f`} key={nanoid()}>
                <span>{roundsBadge(index)}</span>
              </div>
            )}
            <div className={"div" + game.id + "-f"} key={nanoid()}>
              <Game
                date={game.date}
                FPscore={game.firstTeamScore}
                FPname={game.firstTeamName}
                SPscore={game.secondTeamScore}
                SPname={game.secondTeamName}
                id={game.id}
                token={token}
                isUpper={isUpper}
                updateTournamentData={updateTournamentData}
                key={nanoid()}
              />
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Finals;
