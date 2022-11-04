import Image from "next/image";
import SvgLoading from "../static/Loading.svg";
import styled from "styled-components";
const StyledContainerLoading = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: #354259;
  z-index: 100;
`;
const Loading = () => {
  return (
    <StyledContainerLoading>
      <Image src={SvgLoading} alt="loading" width={300} height={300}></Image>
    </StyledContainerLoading>
  );
};

export default Loading;
