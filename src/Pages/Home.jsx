import styled from 'styled-components'
import { Header, TeamInput, Selections, Button } from '../Components'

const Body = styled.div`
  background-color: #d9d9d9;
  height: 100vh;
`

const Inputdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Bot = styled.div`
  display: flex;
  justify-content: center;
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`






const Home = () => {
  return (
    <Body>
      <Header Title='League Champo 5' SubHead='League of Legends Custom Game Toolbox' />
      <Inputdiv>
        <TeamInput />
      </Inputdiv>
      <Bot>
        <Left>
          <Selections Title="Map Select" One="Howling Abyss" Two="Summoners Rift" />
          <Selections Title="Role Select" One="Random Roles" Two="Manual Roles" />
          <Selections Title="Team Select" One="Random Teams" Two="Manual Teams" />
          <Button text="Send it" height="86px" width="139px"></Button>
        </Left>
      </Bot>
    </Body>
  )
}

export default Home
