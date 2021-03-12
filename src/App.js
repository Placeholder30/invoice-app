import styled from "styled-components";
import InvoicePage from "./components/landingPage/InvoicePage";

function App() {
  return (
    <Wrapper>
      <div className="container">
        <InvoicePage />
      </div>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  background-color: #222;
  height: 100vh;

  .container {
    width: 70vw;
    margin: 0 auto;
  }
`;
