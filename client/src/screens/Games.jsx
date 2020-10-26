import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { destroyGame } from '../services/games'

export default function Games(props) {
  const { games, currentUser } = props
  const [setIsDeleted] = useState(false)
  const [game] = useState({
    name: '',
    image: ''
  })

  const deleteConfirmation = () => {
    let r = window.confirm("Delete game?")
    console.log(r)
    if (r === true) {
      if (currentUser) {        
        gameDeleted() 
      }
    }
  }

  const gameDeleted = async () => {
    const deleted = await destroyGame(game.id)
    setIsDeleted(deleted)
  }

  return (
    <div>
      <h3>Favorite Games</h3>
      
      {
        games.map(game => (
          <div key={game.id}>
            <Link to={`/games/${game.id}`}>
              <p>{game.name}</p>
              <img src={game.image}/>
            </Link>
            <br/>
            <Link to={`/games/${game.id}/edit`}>
              <button>Edit</button>
              <br/>
            </Link>
            <button onClick={deleteConfirmation}>Delete</button>
            
            
          </div>
        ))
      }
      <br/>
      <Link to='/games/new'><button>Create</button></Link>
    </div>
  )
}
