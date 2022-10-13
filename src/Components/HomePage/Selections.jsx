import styled from "styled-components"
import React from "react"

const Title = styled.h3`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  text-align: start;
`

const FlexBox = styled.div`
  display: flex;
`

const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  margin-bottom: 30px;
`

const Check = styled.input`
  width: 25px;
  height: 25px;
  margin-left: 40px;
`
const Label = styled.label``

const Selections = props => {
  return (
    <>
      <Title>{props.Title}</Title>
      <FlexBox>
        <Boxes>
          <Check type='checkbox' className='One'></Check>
          <Label htmlFor='One'>{props.One}</Label>
        </Boxes>
        <Boxes>
          <Check type='checkbox' className='Two'></Check>
          <Label htmlFor='Two'>{props.Two}</Label>
        </Boxes>
      </FlexBox>
    </>
  )
}

export default Selections
