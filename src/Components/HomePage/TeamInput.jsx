import styled from "styled-components"


const Input = styled.textarea`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: large;
  color: #404040;
  width: 895px;
  height: 76px;
  margin-top: 76px;
  margin-bottom: 50px;
  resize: none;
  border: 1px solid #a6a6a6;
`

const TeamInput = () => {
    return (
        <Input type="text" placeholder="Player names here, seperate with commas" />
    )
}

export default TeamInput