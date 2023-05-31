import React from "react";
import Player from "./player.js";
import players from "../players";
const PlayerList = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div className="row">
        {players.map((player) => (
          <div className="col-6 mb-2 d-flex justify-content-center">
            <Player  {...player} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerList;
