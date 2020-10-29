import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from "./screens/Comments"
import { getOneGame } from '../services/games';

export default function FoodDetail(props) {
  const [game, setGame] = useState(null);
  const [commentId, setCommentId] = useState('')
//   const { comments } = props;
  const { id } = useParams();

  useEffect(() => {
    const fetchGame = async () => {
      const gameItem = await getOneGame(id);
      setGame(gameItem);
    }
    fetchGame();
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const gameItem = await addComment(id, commentId);
    setFood(gameItem);
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setCommentId(value);
  }

  return (
    <div>
      {
        game &&
        <>
          <h3>{game.name}</h3>
          {game.comments.map(comment => (
            <p key={comment.id}>{comment.name}</p>
          ))}
        </>
      }
    </div>
  )
}
