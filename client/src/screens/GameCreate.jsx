import React, { useState } from 'react'

export default function GameCreate(props) {
  const [formData, setFormData] = useState({
    name: ''
  })

  const { handleGameCreate } = props

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ [name]: value })
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      handleGameCreate(formData)
    }}>
      <h3>Create Favorite Game</h3>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <button>Create</button>
    </form>
  )
}
