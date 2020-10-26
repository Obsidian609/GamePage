import React from 'react'
import { Link } from 'react-router-dom'

export default function Games(props) {
  const { games } = props

  return (
    <div>
      <h3>Favorite Games</h3>
      
      {
        games.map(game => (
          <div key={game.id}>
            <Link to={`/games/${game.id}`}><p>{game.name}</p></Link>
            <Link to={`/games/${game.id}/edit`}><button>Edit</button></Link>
            <button>Delete</button>
          </div>
        ))
      }
      <Link to='/games/new'><button>Create</button></Link>
    </div>
  )
}
