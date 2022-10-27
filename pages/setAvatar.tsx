import { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import ImgAvatar from "../assets/ImgAvatar/imgAvatar";
import Image from "next/image";
const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #354259;
  color: #fff;
`;
const StyledWrapAvatars = styled.div`
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  .avatar {
    border-radius: 50%;
    cursor: pointer;
    padding: 0.2rem;
    border: 0.2rem solid transparent;
    transition: 0.5s ease-in-out;
  }
  .select {
    border: 0.2rem solid #4e0eff;
  }
`;
interface IAvatar {
  index: number;
}
const SetAvatar = () => {
  const [avatar, setAvatar] = useState(false);
  const [selectAvatar, setSelectAvatar] = useState<IAvatar>({ index: NaN });
  return (
    <StyledContainer>
      <h1>Pick an avatar as your profile picture</h1>
      <StyledWrapAvatars>
        {ImgAvatar.map((avatar, index) => {
          return (
            <Image
              key={index}
              className={`avatar ${selectAvatar === index ? "select" : ""}`}
              src={avatar}
              alt="logo"
              width={100}
              height={100}
              onClick={() => {
                setSelectAvatar(index);
                setAvatar(true);
              }}
            ></Image>
          );
        })}
      </StyledWrapAvatars>
      <Button variant="contained" color="secondary">
        Set AS PROFILE PICTURE
      </Button>
    </StyledContainer>
  );
};

export default SetAvatar;
