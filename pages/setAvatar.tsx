import { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import ImgAvatar from "../assets/ImgAvatar/imgAvatar";
import Image from "next/image";
import { doc, updateDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../config/firebase";
import { useRouter } from "next/router";
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
  // const [avatar, setAvatar] = useState(false);
  const router = useRouter();
  const [loggedInUser, loading, _error] = useAuthState(auth);
  const [selectAvatar, setSelectAvatar] = useState<IAvatar>({ index: NaN });
  const setProfilePicture = async () => {
    if (selectAvatar === undefined) {
    } else {
      const imgRef = doc(db, "users", loggedInUser?.email as string);
      await updateDoc(imgRef, {
        imageUser: ImgAvatar[selectAvatar],
      });
      router.push("/chat");
    }
  };
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
              }}
            ></Image>
          );
        })}
      </StyledWrapAvatars>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          setProfilePicture();
        }}
      >
        Set AS PROFILE PICTURE
      </Button>
    </StyledContainer>
  );
};

export default SetAvatar;
