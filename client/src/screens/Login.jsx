import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Div = styled.div`
  background-color: #677db7ff;
  margin: -20px 0px -10px 0px;
  padding: 100px 0px;
`;

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;
  const { error, handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(formData);
        }}
      >
        <h3>Login</h3>
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
        <button>
          <Link to="/games">Login</Link>
        </button>
        <br />
        <br />
        <Link to="/register">Register</Link>
      </form>
    </Div>
  );
}
