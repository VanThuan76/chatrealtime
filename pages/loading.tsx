import Image from "next/image";
import SvgLoading from "../assets/Loading.svg";
import styled from "styled-components";
const StyledContainerLoading = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: #354259;
`;
const Loading = () => {
  return (
    <StyledContainerLoading>
      <Image src={SvgLoading} alt="loading" width={300} height={300}></Image>
    </StyledContainerLoading>
  );
};

export default Loading;
