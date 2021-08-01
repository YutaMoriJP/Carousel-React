import React from "react";
import TextStyled from "../styles/Text";
import styled from "styled-components";

export const Wrapper = styled.article`
  background: #9c36b5;
  max-width: 400px;
  width: 80%;
  min-width: 180px;
  padding: 5px 20px;
  border-radius: 8px;
  box-shadow: 4px 4px 6px #495057;
  font-size: 0.9rem;
  text-align: center;
  a {
    color: white;
  }
`;

const Text = ({ children }) => {
  return (
    <Wrapper>
      <TextStyled>{children}</TextStyled>
      <a
        href="https://vanilla-carousel.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Vanilla JS Version
      </a>
    </Wrapper>
  );
};

export default Text;
