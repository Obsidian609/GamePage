import React, { useState } from "react";
// import styled from "styled-components";
import { Link, Switch } from "react-router-dom";
import "../App.css";

export default function Comments() {
  const { games } = props;
  const [game] = useState({
    name: "",
    image: "",
    comments: "",
  });

  return (
    <div>
      <h3>{game.id}</h3>
      {games.map((game) => (
        <div key={game.id}>
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
