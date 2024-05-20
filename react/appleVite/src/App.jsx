import "./App.css";
import Nav from "./components/Nav";
import Row from "./components/Row";
import { styled } from "styled-components";

function App() {
  return (
    <>
      <Container>
        <Nav />
        <Row />
      </Container>
    </>
  );
}

const Container = styled.div`
  position: relative;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

export default App;
