import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { destroyGame } from "../services/games";
import "../App.css";

const Div = styled.div`
  background-color: #677db7ff;
  margin: -20px 0px -10px 0px;
  padding: 50px 0px;
  align-self: center;
`;

export default function Games(props) {
  const { games, currentUser } = props;
  const [setIsDeleted] = useState(false);
  const [game] = useState({
    name: "",
    image: "",
  });

  const deleteConfirmation = () => {
    let r = window.confirm("Delete game?");
    console.log(r);
    if (r === true) {
      if (currentUser) {
        gameDeleted();
      }
    }
  };

  const gameDeleted = async () => {
    const deleted = await destroyGame(game.id);
    setIsDeleted(deleted);
  };

  return (
    <Div>
      <h3>Favorite Games</h3>
      <div className="gallery">
        <div className="img">
          <div className="responsive">
            {games.map((game) => (
              <div key={game.id}>
                <Link
                  style={{ textDecoration: "none", color: "#191308ff" }}
                  to={`/games/${game.id}`}
                >
                  <p>{game.name}</p>
                  <img src={game.image} />
                </Link>
                <br />
                <Link to={`/games/${game.id}/edit`}>
                  <button>Edit</button>
                  <br />
                </Link>
                <button onClick={deleteConfirmation}>Delete</button>
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
