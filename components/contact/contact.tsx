import Image from "next/image";
import { useState, useEffect } from "react";
import styled from "styled-components";
import MainLogo from "../home/mainLogo";
function Contact({ currentUser }) {
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
    height: 100%
    background-color: red;
    display: flex;
    flex-direction: columns;
    justify-content: center;
    align-items: center;
    
    
  `;
  const StyledWrapUser = styled.div`
    display: flex;
    flex-direction: rows;
    justify-content: center;
    align-items: center;
    gap: 5px;
  `;
  return (
    <>
      {currentUserName && currentUserImage && (
        <StyledContainerContact>
          <div className="brand">
            <MainLogo></MainLogo>
          </div>
          <div className="contacts"></div>
          <StyledWrapUser>
            <Image
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
