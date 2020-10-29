import React, { useState } from "react";
// import styled from "styled-components";
import { Link, Switch } from "react-router-dom";
import "../App.css";

export default function Comments() {
  const { games } = props;
  const [game, setGame] = useState({
    name: "",
    image: "",
    comments: "",
  });

  return (
    <div>
      <h3>Favorite Game</h3>
      {games.map((game, index) => (
        <div key={index}>
          <Switch>
            <Link
              style={{ textDecoration: "none", color: "#191308ff" }}
              to={`/games/${game.id}/comments`}
            >
              <p>{game.name}</p>
              <img src={game.image} />
            </Link>
            <br />
            <Link to={`/games/${game.id}/edit`}>
              <button>Edit</button>
              <br />
            </Link>
          </Switch>
        </div>
      ))}
    </div>
  );
}
