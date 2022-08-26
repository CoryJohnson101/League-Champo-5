import styled from 'styled-components'

const Head = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #010033;
  height: 150px;
`

const Title = styled.h1`
  position: absolute;
  color: #ffd700;
  font-size: 60px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  top: 0px;
`

const Title2 = styled.p`
  position: absolute;
  color: #ffd700;
  font-size: 20px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  top: 7vw;
`

const Header = props => {
  return (
    <Head>
      <Title>{props.Title}</Title>
      <Title2>{props.SubHead}</Title2>
    </Head>
  )
}

export default Header
