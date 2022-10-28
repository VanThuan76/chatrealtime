import { Button } from "@mui/material";
import Head from "next/head";
import styled from "styled-components";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import MainLogo from "../components/home/mainLogo";
const StyledContainer = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: #354259;
  color: #fff;
`;
const StyledLoginContainer = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  background-color: #000;
  border-radius: 10%;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 /0.1);
`;
const Login = () => {
  const [signInWithGoogle, _user, _loading, _error] = useSignInWithGoogle(auth);
  const signIn = () => {
    signInWithGoogle();
  };
  return (
    <StyledContainer>
      <Head>
        <title>Login</title>
      </Head>
      <StyledLoginContainer>
        <MainLogo></MainLogo>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => {
            signIn();
          }}
        >
          Sign in with Google
        </Button>
      </StyledLoginContainer>
    </StyledContainer>
  );
};

export default Login;
