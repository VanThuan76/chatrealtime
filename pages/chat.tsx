import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import Contact from "../components/contact/contact";
import MainWelcome from "../components/home/mainWelcome";
import { auth, db } from "../config/firebase";
import Login from "./login";
const StyledContainerChat = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #354259;
  .container {
    width: 80%;
    height: 80%;
    background-color: #1B2430;
    display: grid;
    grid-template-columns: 25% 75%;
  }
`;
interface IUser {
  username: string;
  avatar: string;
}
const Chat = () => {
  const router = useRouter();
  const [loggedInUser, loading, _error] = useAuthState(auth);
  const [currentUser, setCurrentUser] = useState<IUser>({
    username: "",
    avatar: "",
  });
  useEffect(() => {
    const getADocument = async () => {
      const ref = doc(db, "users", loggedInUser?.email as string);
      const docSnap = await getDoc(ref);
      console.log(docSnap.data())
      if (docSnap.exists()) {
        setCurrentUser({
          username: `${docSnap.data().username}`,
          avatar: `${docSnap.data().imageUser}`,
        });
      }
    };
      getADocument();
  }, []);
  // useEffect(() => {
  //   const checkUser = async () => {
  //     if (currentUser) {
  //       // if (currentUser.avatar) {
  //       // }\
  //     } else {
  //       // await router.push("/setAvatar");
  //     }
  //   };
  //   checkUser();
  // }, [currentUser]);
  return (
    <StyledContainerChat>
      <div className="container">
        <Contact currentUser={currentUser}></Contact>
        <MainWelcome></MainWelcome>
      </div>
    </StyledContainerChat>
  );
};

export default Chat;
