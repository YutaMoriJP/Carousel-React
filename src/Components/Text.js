import React from "react";
import TextStyled from "../styles/Text";
import styled from "styled-components";
import Link from "../styles/Link";

export const Wrapper = styled.article`
  background: #9c36b5;
  max-width: 400px;
  width: 75%;
  min-width: 150px;
  padding: 5px 15px;
  border-radius: 8px;
  box-shadow: 4px 4px 6px #495057;
  font-size: 0.8rem;
  text-align: center;
`;

const Text = ({ children }) => {
  return (
    <Wrapper>
      <TextStyled>{children}</TextStyled>
      <Link
        href="https://vanilla-carousel.netlify.app/"
        target="_blank"
        rel="noreferrer"
        vanilla
      >
        Vanilla JS Version
      </Link>
      <Link
        href="https://github.com/YutaMoriJP/Carousel-React"
        target="_blank"
        rel="noreferrer"
        github
      >
        Github repo
      </Link>
    </Wrapper>
  );
};

export default Text;
