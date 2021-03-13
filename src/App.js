import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import CreateInvoice from "./components/createPage/CreateInvoice";
import InvoicePage from "./components/landingPage/InvoicePage";

function App() {
  return (
    <Wrapper>
      <Router>
        <Switch>
          <Route exact path="/">
            <InvoicePage />
          </Route>
          <Route exact path="/createinvoice">
            <CreateInvoice />
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

export default App;
