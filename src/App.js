import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import CreateInvoice from "./components/createPage/CreateInvoice";
import InvoicePage from "./components/landingPage/InvoicePage";
import { useState } from "react";

function App() {
  const [input, setInput] = useState({});
  const [submit, setSubmit] = useState(false);
  const [invoice, setInvoice] = useState([]);
  const [createInvoice, setCreateInvoice] = useState(false);

  return (
    <Wrapper>
      <Router>
        <Switch>
          <Route exact path="/">
            <InvoicePage
              input={input}
              submit={submit}
              invoice={invoice}
              setCreateInvoice={setCreateInvoice}
            />
            {createInvoice && (
              <CreateInvoice
                setInvoice={setInvoice}
                setInput={setInput}
                input={input}
                setSubmit={setSubmit}
                setCreateInvoice={setCreateInvoice}
              />
            )}
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
