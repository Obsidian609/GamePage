import React, { useState, useEffect } from "react";
import { getAllGames, postGame, putGame } from "../services/games";
import { Route, Switch, useHistory } from "react-router-dom";
import Games from "../screens/Games";
import GameCreate from "../screens/GameCreate";
import GameEdit from "../screens/GameEdit";

export default function MainContainer(props) {
  const { currentUser } = props;
  const [games, setGames] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchGames = async () => {
      const gamesData = await getAllGames();
      setGames(gamesData);
    };
    fetchGames();
  }, []);

  const handleGameCreate = async (gameData) => {
    const newGame = await postGame(gameData);
    setGames((prevState) => [...prevState, newGame]);
    history.push("/games");
  };

  const handleGameEdit = async (id, gameData) => {
    const updatedGame = await putGame(id, gameData);
    setGames((prevState) =>
      prevState.map((game) => {
        return game.id === Number(id) ? updatedGame : game;
      })
    );
    history.push("/games");
  };

  return (
    <Switch>
      <Route path="/games/new">
        <GameCreate handleGameCreate={handleGameCreate} />
      </Route>
      <Route path="/games/:id/edit">
        <GameEdit handleGameEdit={handleGameEdit} games={games} />
      </Route>
      <Route path="/games">
        <Games games={games} currentUser={currentUser} />
      </Route>
    </Switch>
  );
}
