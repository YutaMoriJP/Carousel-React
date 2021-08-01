import React from "react";
import TextStyled from "../styles/Text";
import styled from "styled-components";

export const Wrapper = styled.article`
  background: #5f3dc4;
  max-width: 300px;
  width: 80%;
  min-width: 180px;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 4px 4px 6px #495057;
`;

const Text = ({ children }) => {
  return (
    <Wrapper>
      <TextStyled>{children}</TextStyled>
    </Wrapper>
  );
};

export default Text;
