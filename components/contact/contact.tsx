import Image from "next/image";
import { type } from "os";
import { useState, useEffect } from "react";
import styled from "styled-components";
import MainLogo from "../home/mainLogo";
type Contact = {
  currentUser: object,
}
function Contact({ currentUser }:Contact) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  useEffect(() => {
    if (currentUser) {
      setCurrentUserName(currentUser.username);
      setCurrentUserImage(currentUser.avatar);
    }
  }, [currentUser]);
  const StyledContainerContact = styled.div`
    width: 100%;
    height: 100%;
    background-color: #1c2533;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `;
  const StyledWrapUser = styled.div`
    padding: 10% 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    .imageUser{
      border-radius: 50%;
    }
  `;
  return (
    <>
      {currentUserName && currentUserImage && (
        <StyledContainerContact>
          <StyledWrapUser>
          <div className="brand">
            <MainLogo></MainLogo>
          </div>
          <div className="contacts"></div>
            <Image
              className="imageUser"
              src={currentUserImage}
              alt="imageUser"
              width={100}
              height={100}
            ></Image>
            <p>{currentUserName}</p>
          </StyledWrapUser>
        </StyledContainerContact>
      )}
    </>
  );
}

export default Contact;
