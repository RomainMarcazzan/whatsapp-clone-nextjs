import styled from "styled-components";
import Head from "next/head";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";

function Login() {
  const signin = () => {
    auth.signInWithPopup(provider).catch((err) => {
      alert(err);
    });
  };
  return (
    <Container>
      <Head>
        <title>Login page</title>
      </Head>
      <LoginContainer>
        <Logo
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ekp4CEBIMMhF6CNiqAFqIwHaHa%26pid%3DApi&f=1"
          alt="logo"
        />
        <Button onClick={signin}>Se connecter avec Google</Button>
      </LoginContainer>
    </Container>
  );
}

export default Login;
const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;
const LoginContainer = styled.div`
  display: flex;
  padding: 100px;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 4px 14px -3px rgba(0, 0, 0, 0.7);
`;
const Logo = styled.img`
  height: 250px;
  width: 250px;
  margin-bottom: 50px;
`;
