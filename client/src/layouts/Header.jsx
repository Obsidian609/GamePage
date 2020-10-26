import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Div = styled.div`
  background: #bf211eff;
  border: 1px solid #707070;
  color: #69a197ff;
  font-size: 22px;
  padding-bottom: 50px;
`;
const Title = styled.h1`
  color: #191308ff;
  font-size: 60px;
`;

export default function Header(props) {
  const { currentUser, handleLogout } = props;

  return (
    <Div>
      <Title>Game Page</Title>
      {currentUser ? (
        <>
          <p>{currentUser.username}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <Link to="/login">
          <button>Login/Register</button>
        </Link>
      )}
      <br />
      {currentUser && (
        <>
          <Link to="/games">Games</Link>
        </>
      )}
    </Div>
  );
}
