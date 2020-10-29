import api from "./api-config";

export const getAllGames = async () => {
  const resp = await api.get("/games");
  return resp.data;
};

export const getOneGame = async (id) => {
  const resp = await api.get(`/games/${id}`);
  return resp.data;
};

export const postGame = async (gameData) => {
  const resp = await api.post("/games", { game: gameData });
  return resp.data;
};

export const putGame = async (id, gameData) => {
  const resp = await api.put(`/games/${id}`, { game: gameData });
  return resp.data;
};

export const destroyGame = async (id) => {
  const resp = await api.delete(`/games/${id}`);
  return resp;
};

export const addComment = async (gameId, commentId) => {
  const resp = await api.put(`/comments/${commentId}/games/${gameId}`);
  return resp.data;
};
