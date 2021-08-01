import styled from "styled-components";

const Button = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 0;
  background: ${props => (props.current ? "black" : "grey")};
  margin: 5px;
  cursor: pointer;
`;

export default Button;
