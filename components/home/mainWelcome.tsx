import Image from "next/image"
import LogoWelcome from "../../assets/robot.gif"
import styled from "styled-components"
const StyledContainerWelcome = styled.div`
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  .logo{
    margin-bottom: -7%;
  }
  .text-welcome{
    font-size: 3.4rem;
    font-weight: bold;
  }
  p{
    font-size: 1.2rem;
    font-weight: bold;
  }

`;
function MainWelcome(){
    return (
    <StyledContainerWelcome>
        <Image className="logo" src={LogoWelcome} alt="welcome" width={350} height={350}></Image>
        <h1 className="text-welcome">Welcome ,admin!</h1>
        <p>Please select a chat to Start Messaging</p>
    </StyledContainerWelcome>
    )
}
export default MainWelcome