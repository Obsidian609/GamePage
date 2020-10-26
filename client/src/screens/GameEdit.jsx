import React, { useState, useEffect } from 'react'
import { useParams, Link, Redirect } from 'react-router-dom'

export default function GameEdit(props) {
  const [formData, setFormData] = useState({
    name: ''
  })

  const { handleGameEdit, games } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const { name } = games.find(game => game.id === Number(id));
      setFormData({ name });
    }
    if (games.length) {
      prefillFormData()
    }
  }, [games, id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value })
  }

  const {isAuthenticated} = props
  if (isAuthenticated) {
    return <Redirect to='/games' />
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleGameEdit(id, formData);
    }}>
      <h3>Edit Favorite Game</h3>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          alt={formData.name}
          onChange={handleChange}
        />
        <br/>
        Image:
        <input
          type="text"
          name="image"
          image="text"
          value={formData.name}
          alt={formData.name}
          onChange={handleChange}
        />
      </label>
      <br/>
      <button>
        <Link to='/games'>Create</Link>
      </button>
    </form>
  )
}
