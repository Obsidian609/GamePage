import React, { useState } from "react";

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;
  const { error, handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }}
    >
      <h3>Register</h3>
      {error && <p>{error}</p>}
      <label>
        Username:
        <br />
        <input
          type="text"
          value={username}
          name="username"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <br />
        <input type="text" value={email} name="email" onChange={handleChange} />
      </label>
      <br />
      <label>
        Password:
        <br />
        <input
          type="password"
          value={password}
          name="password"
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Register</button>
    </form>
  );
}
