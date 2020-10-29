import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../App.css";

const Div = styled.div`
  background-color: #677db7ff;
  margin: -20px 0px -10px 0px;
  padding: 50px 0px;
  align-self: center;
  @media (min-width: 1024px) {
    background-color: yellow;
  }
  @media (max-width: 500px) {
    background-color: brown;
  }
`;

export default function Games(props) {
  const { games } = props;

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
                  <img src={game.image} alt="favorite game" />
                </Link>
                <br />
                <Link to={`/games/${game.id}/edit`}>
                  <button>Edit</button>
                  <br />
                </Link>
                {game.comments.map((comment) => (
                  <p key={comment.id}>{comment.name}</p>
                ))}
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
