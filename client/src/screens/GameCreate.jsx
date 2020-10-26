import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function GameCreate(props) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });

  const { handleGameCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleGameCreate(formData);
      }}
    >
      <h3>Submit Your Favorite Game</h3>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          alt={formData.name}
          onChange={handleChange}
        />
        <br />
        Image:
        <input
          type="text"
          name="image"
          image="text"
          value={formData.image}
          alt={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>
        <Link to="/games">Create</Link>
      </button>
    </form>
  );
}
