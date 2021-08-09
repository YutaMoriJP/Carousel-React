import styled from "styled-components";

const Img = styled.img`
  max-width: 400px;
  width: 80%;
  min-width: 180px;
  border-radius: 8px;
  transition: box-shadow 0.5s;
  display: ${props => (props.active ? "block" : "none")};
  margin: 5px;
  :hover {
    box-shadow: 5px 5px 25px black;
  }
`;

export default Img;
