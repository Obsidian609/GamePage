import React from "react";
import styled from "styled-components";

const Div = styled.div`
  padding-top: -5px;
  display: grid;
  grid-template-columns: 20% 20% 30% 15% 15%;
  justify-content: space-around;
  align-items: center;
`;
const H1 = styled.h1`
  display: flex-wrap;
`;
const Ul = styled.ul`
  display: flex;
`;
const Li = styled.li`
  list-style: none;
  padding: 0px 20px;
`;

export default function Footer() {
  return (
    <Div>
      <H1>Game Page</H1>
      <Ul>
        <Li>
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            href="https://github.com/Obsidian609/GamePage"
          >
            Github
          </a>
        </Li>
        <Li>
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            href="https://www.linkedin.com/in/obsidianstudio/"
          >
            LinkedIn
          </a>
        </Li>
        <Li>
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >
            YouTube
          </a>
        </Li>
      </Ul>
    </Div>
  );
}
