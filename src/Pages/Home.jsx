import styled from 'styled-components'

const Body = styled.body`
    background-color: #D9D9D9;
    height: 100vh;
`
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
    color: #FFD700;
    font-size: 60px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    top:0px;
`

const Title2 = styled.p`
    position: absolute;
    color: #FFD700;
    font-size: 20px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    top: 10%;
`
const Inputdiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const TeamInput = styled.textarea`
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
const Bot = styled.div`
    display: flex;
    justify-content: center;
`
const Left = styled.div`
    display: flex;
    flex-direction: column;
`
const Title3 = styled.h3`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    text-align: start;
    margin-left: 65px;
`
const Title4 = styled.h3`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    text-align: start;
    margin-left: 60px;
`
const Boxes = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 15px;
    margin-bottom: 30px;
`
const AHH = styled.div`
    display: flex;
`
const Check = styled.input`
    width: 25px;
    height: 25px;
    margin-left: 40px;
`

const Boxes2 = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 30px;
`
const Label = styled.label`
    margin-left: 25px;
`

const Sendit = styled.button`
    width: 139px;
    height: 86px;
    background-color: #9F9FBA;
    color: black;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: larger;
    border-radius: 30%;
    border: 2px solid black;
    box-shadow: 0 4px #404040;
    margin-top: 20px;
    margin-left: 35px;

    &:hover {background-color:#7a7a9f }

    &:active {
        background-color: #7a7a9f;
        box-shadow: 0 0px #404040;
        transform: translateY(4px);
    }
`



const Home = () => {
    return (
        <Body>
            <Head>
                <Title>League Champo 5</Title>
                <Title2>League of Legends Custom Game Toolbox</Title2>
            </Head>
            <Inputdiv>
                <TeamInput type="text" placeholder='Player names here, seperate with commas'></TeamInput>
            </Inputdiv>
            <Bot>
                <Left>
                    <Title3>Map Select</Title3>
                    <AHH>
                        <Boxes>
                            <Check type="checkbox" className="HA"></Check>
                            <label for="HA">Howling Abyss</label>
                        </Boxes>
                        <Boxes>
                            <Check type="checkbox" className="SR"></Check>
                            <label for="SR">Summoners Rift</label>
                        </Boxes>
                    </AHH>
                    <Title3>Role Select</Title3>
                    <AHH>
                        <Boxes>
                            <Check type="checkbox" className="RanRole"></Check>
                            <label for="RanRole">Random Roles</label>
                        </Boxes>
                        <Boxes>
                            <Check type="checkbox" className="ManRole"></Check>
                            <label for="ManRole">Manual Roles</label>
                        </Boxes>
                    </AHH>
                    <Title4>Team Select</Title4>
                    <AHH>
                        <Boxes2>
                            <Check type="checkbox" className="Rand"></Check>
                            <Label for="Rand">Random</Label>
                        </Boxes2>
                        <Boxes2>
                            <Check type="checkbox" className="Man"></Check>
                            <Label for="Man">Manual</Label>
                        </Boxes2>
                    </AHH>
                    <Sendit type="submit" >Send it</Sendit>
                </Left>
            </Bot>
        </Body>
    )
}

export default Home