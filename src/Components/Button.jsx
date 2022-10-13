import styled from "styled-components"
import React from "react"

const Buttons = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  background-color: #9f9fba;
  color: black;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: larger;
  border: 2px solid black;

  &:hover {
    background-color: #7a7a9f;
  }

  &:active {
    background-color: #404040;
  }
`
const Button = props => {
  return (
    <Buttons type='submit' height={props.height} width={props.width}>
      {props.text}
    </Buttons>
  )
}

export default Button
