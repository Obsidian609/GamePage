import React, { useState } from "react";
import styled from "styled-components";
import { Link, Switch } from "react-router-dom";
import "../App.css";

const Div = styled.div`
  background-color: #677db7ff;
  margin: -20px 0px -10px 0px;
  padding: 50px 0px;
  align-self: center;
`;

export default function Games(props) {
  const { games } = props;
  const [game] = useState({
    name: "",
    image: "",
    comments: ""
  });

  return (
    <Div>
      <h3>Favorite Games</h3>
      <div className="gallery">
        <div className="img">
          <div className="responsive">
            {games.map((game) => (
              <div key={game.id}>
                <Switch>
                <Link
                  style={{ textDecoration: "none", color: "#191308ff" }}
                  to={`/games/${game.id}`}
                >
                  <p>{game.name}</p>
                  <img src={game.image} />
                </Link>
                </Switch>
                <br />
                <Link to={`/games/${game.id}/edit`}>
                  <button>Edit</button>
                  <br />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
      <Link to="/games/new">
        <button>Create</button>
      </Link>
    </Div>
  );
}
