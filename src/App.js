import NavBar from "./components/NavBar";
import Main from './components/Main'

import GlobalStyle from "./theme/globalStyle";
import styled from "styled-components";
import bg from "./images/bg.png";

const Layout = styled.div`
  background-size: cover;
  background-image: url(${bg});
  background-position: center center;
  min-height: 100vh;

  @media only screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <NavBar />
        <Main/>
      </Layout>
    </>
  );
}

export default App;
