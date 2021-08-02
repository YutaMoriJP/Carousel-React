import styled, { css } from "styled-components";

const Link = styled.a`
  color: white;
  display: block;
  text-decoration: 0;
  padding-top: 2px;
  font-weight: 900;
  color: #b197fc;
  :hover {
    text-decoration: underline;
  }
  ${props =>
    props.vanilla &&
    css`
      ::after {
        content: " 🍨";
      }
    `}
  ${props =>
    props.github &&
    css`
      ::after {
        content: " 📖";
      }
    `}
`;

export default Link;
