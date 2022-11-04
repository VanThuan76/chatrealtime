import Image from "next/image";
import styled from "styled-components";
import LogoChat from "../../static/logo.svg";
const StyledWrapHeaderLogin = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  margin-bottom: 50px;
  font-weight: bold;
`;
function MainLogo() {
  return (
    <StyledWrapHeaderLogin>
      <Image src={LogoChat} alt="logo" width={100} height={100}></Image>
      <h2>SNAPPY</h2>
    </StyledWrapHeaderLogin>
  );
}

export default MainLogo;
