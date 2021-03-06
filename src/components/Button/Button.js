import React from 'react';
import styled from "../../../node_modules/styled-components";

export const StyledButton = styled.a`
  text-decoration: none;
  background-color: #f4425f;
  color: "white";
  font-size: 1em;
  margin: 0 auto;
  padding: 0.25em 1em;
  border: 0.5px solid whitesmoke;
  border-radius: 5px;
  text-align: center;
  box-sizing: border-box;
`

const Button = (props) => (
  <StyledButton href={props.url} target="_blank">{props.children}</StyledButton>
)

export default Button;