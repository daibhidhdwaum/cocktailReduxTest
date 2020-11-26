import styled from "styled-components";

const Button = styled.button`
  background-color: #fffffc;
  border: 4px solid tomato;
  color: Tomato;
  padding: 8px 20px;
  border-radius: 5px;
  align-self: center;
  font-size: 20px;
  font-weight: 600;

  :hover,
  :focus {
    color: #fffffc;
    background-color: tomato;
    border-color: #fffffc;
    cursor: pointer;
  }
`;

export default Button;
