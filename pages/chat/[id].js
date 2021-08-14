import styled from "styled-components";
import Head from "next/head";
function Chat() {
  return (
    <Container>
      <Head>
        <title>Chat</title>
      </Head>
      <h1>The Chat</h1>
    </Container>
  );
}

export default Chat;
const Container = styled.div``;
