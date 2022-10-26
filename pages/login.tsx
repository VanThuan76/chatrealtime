import { Button } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import LogoChat from "../assets/logo.svg"
const StyledContainer = styled.div`
    height: 100vh;
    display: grid;
    place-items: center;
    background-color: #354259;
    color: #fff;
`
const StyledLoginContainer = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px;
    background-color: #000;
    border-radius: 10%;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 /0.1);
`
const StyledWrapHeaderLogin = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
    margin-bottom: 50px;
    font-weight: bold;
`
const Login = () => {
    return ( 
        <StyledContainer>
            <Head>
                <title>Login</title>
            </Head>
            <StyledLoginContainer>
                <StyledWrapHeaderLogin>
                    <Image src={LogoChat} alt="logo" width={100} height={100}></Image>
                    <h2>SNAPPY</h2>
                </StyledWrapHeaderLogin>
                <Button variant="outlined" color="secondary">Sign in with Google</Button>
            </StyledLoginContainer>
        </StyledContainer>
     );
}
 
export default Login;